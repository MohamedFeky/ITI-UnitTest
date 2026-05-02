import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import Posts from './Posts';

const fakePosts = [
  {
    id: 1,
    title: 'title one',
    body: 'body one',
  },
  {
    id: 2,
    title: 'title two',
    body: 'body two',
  },
];

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(fakePosts);
  }),
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Posts />', () => {
  test('renders loading indicator when component mounts', () => {
    render(<Posts />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders posts list after successful data fetching', async () => {
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getAllByRole('listitem')).toHaveLength(fakePosts.length);

    for (const post of fakePosts) {
      expect(
        screen.getByRole('heading', { level: 3, name: post.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(post.body)).toBeInTheDocument();
    }
  });

  test('renders error message when fetch posts fails', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json({}, { status: 400 });
      }),
    );

    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getByRole('alert')).toHaveTextContent(/something went wrong/i);
  });

  test('renders empty message when there are no posts', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json([]);
      }),
    );

    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getByText(/no posts for today/i)).toBeInTheDocument();
  });
});
