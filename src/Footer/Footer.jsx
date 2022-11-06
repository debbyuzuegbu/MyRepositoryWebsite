import {
  FooterSection,
  FooterContainer,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
  FooterLabel
} from './Footer.styles';
function Footer() {
  return (
      <div>
          <FooterSection>
              <FooterContainer>
                  <FooterLinkContainer>
                      <FooterLinksWrapper>
                          <FooterLinks>
                              <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to='/about'>About us</FooterLink>
                              <FooterLink to='/repository'>Search repository</FooterLink>
                          </FooterLinks>
                      </FooterLinksWrapper>
                      <FooterLinksWrapper>
                          <FooterLinks>
                              <FooterLinkTitle>Contact</FooterLinkTitle>
                              <FooterLink to='/about'>Instagram</FooterLink>
                              <FooterLink to='/about'>Linkedin</FooterLink>
                          </FooterLinks>
                          
                      </FooterLinksWrapper>
                  </FooterLinkContainer>
                  <FooterCopyRight to='https://github.com/debbyuzuegbu'> &copy; Copyright 2022, Designed and coded by DebbyUzuegbu@Altschool Africa</FooterCopyRight>
              </FooterContainer>
          </FooterSection>
          
      </div>
  )
}

export default Footer;