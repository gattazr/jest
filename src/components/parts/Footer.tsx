import styled from '@emotion/styled';

function Footer() {
  const Quote = styled.p({
    'fontStyle': 'italic'
  })
  return (
    <div className="footer">
      <Quote>
        This website was created to run some experiments and shouldn't be used against its author
      </Quote>
    </div>
  );
}

export default Footer;
