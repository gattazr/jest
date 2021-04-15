import styled from '@emotion/styled';

const Link = styled.a({
  'textDecoration': 'none',
  padding: '10px'
});

function Header() {
  return (
    <div className="header">
      <Link href="/">Home</Link>
      <Link href="/calculator">Calculator</Link>
      <Link href="/nasa-images">Nasa Images</Link>
    </div>
  );
}

export default Header;
