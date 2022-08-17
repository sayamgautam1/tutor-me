import styled from 'styled-components'

export const TeachSkillSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 24px;
  }

  .grid__item {
    background-color: #181818;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    cursor: default;

    &:hover,
    &:focus {
      background-color: #282828;

      img {
        box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
      }
    }

    a {
      display: block;
      width: 100%;
      height: 100%;

      &:hover,
      &:focus {
        text-decoration: none;
        color: white;
      }
    }
  }

  .grid__item__inner {
    padding: 12px;

    @media (min-width: 768px) {
      padding: 16px;
    }
  }

  .grid__item__img {
    position: relative;
    padding-top: 100%;
    margin: 0 auto 24px;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #282828;
      border-radius: ${(props) => (props.type === 'skill' ? '50%' : '2px')};
    }
  }

  .grid__item__name {
    margin: 0 0 4px;
    font-size: 16px;
    letter-spacing: normal;
  }

  .grid__item__label {
    font-size: 14px;
    color: #b3b3b3;
  }
`
export const StyledSection = styled.section`
  &:first-of-type {
    .section__inner {
      padding-top: 0;
    }
  }

  .section__inner {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    padding: 24px 16px;

    @media (min-width: 768px) {
      padding: 32px 64px;
    }
  }

  .section__top {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 32px;
  }

  .section__heading {
    display: flex;
    margin: 0;
    font-size: 24px;
  }

  .section__breadcrumb {
    display: flex;
    color: #b3b3b3;

    &::after {
      content: '/';
      display: block;
      margin: 0 12px;
    }

    a {
      &:hover,
      &:focus {
        color: #ffffff;
      }
    }
  }

  .section__see-all {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: white;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding-bottom: 2px;
  }
`
export const Styles = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    background-color: #ff6464;
    padding: 5px;
    font-weight: 600;
  }
`
