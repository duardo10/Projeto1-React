import { Posts } from '.';
import { render, screen } from '@testing-library/react';

const props = {
    posts: [
        {
            id: 1,
            title: 'title1',
            body: 'body1',
            cover: 'img/img1.png',
        },
        {
            id: 2,
            title: 'title2',
            body: 'body2',
            cover: 'img/img2.png',
        },
        {
            id: 3,
            title: 'title3',
            body: 'body3',
            cover: 'img/img3.png',
        },
    ],
};

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />);
        
        // Verificar se há 3 elementos de cabeçalho com o texto que contém "title"
        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
        
        // Verificar se há 3 elementos de imagem com o texto que contém "title"
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
        
        // Verificar se há 3 elementos de texto com o texto que contém "body"
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
        
        // Verificar se o elemento de imagem para "title3" tem o atributo src correto
        expect(screen.getByAltText('title3')).toHaveAttribute('src', 'img/img3.png');
    });

    // Testar renderização sem posts
    it('should not render posts', () => {
        render(<Posts />);
        // Verificar se não há elementos de cabeçalho com o texto que contém "title"
        expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(0);
    });

    // Testar se o snapshot corresponde ao esperado
    it('should match snapshot', () => {
        const { container } = render(<Posts {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
