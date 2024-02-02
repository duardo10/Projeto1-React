import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    // Use a expressão regular no name ao chamar getByRole
    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
