import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <div class="card-1 card-div">
        <IconContainer>
          <label for="card-1-like" class="like-icon-div-child">
            <input type="checkbox" id="card-1-like" />
            <i class="far fa-heart heart-empty"></i>
            <i class="fas fa-heart heart-fill"></i>
          </label>
        </IconContainer>

        <div class="gow-img-div img-div">
          <img
            src="https://github.com/gerrardNwoke/codePen-imgs/blob/main/imgs/gow-figurine.png?raw=true"
            alt="god-of-war-figurine"
          />
        </div>
        <TextContainer>
          <h2 class="item-name">Kratos and Artreus Statue - God Of War</h2>
          <p class="date"> Departure date: 31/03/2021 </p>
          <div class="pricing-and-cart">
            <div class="pricing">
              <p class="previous-price">$999</p>
              <p class="current-price">$599</p>
            </div>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </TextContainer>
      </div>

      <div class="card-2 card-div">
        <div class="like-icon-div">
          <label for="card-2-like" class="like-icon-div-child">
            <input type="checkbox" id="card-2-like" />
            <i class="far fa-heart heart-empty"></i>
            <i class="fas fa-heart heart-fill"></i>
          </label>
        </div>
        <div class="sekiro-img-div img-div">
          <img
            src="https://github.com/gerrardNwoke/codePen-imgs/blob/main/imgs/sekiro-figurine.png?raw=true"
            alt="sekiro-figurine"
          />
        </div>
        <div class="text-container">
          <h2 class="item-name">Sekiro Statue - Sekiro: Shadows Die Twice</h2>
          <p class="date"> Departure date: 31/03/2021 </p>
          <div class="pricing-and-cart">
            <div class="pricing">
              <p class="previous-price">$50</p>
              <p class="current-price">$799</p>
            </div>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>

      <div class="card-3 card-div">
        <div class="like-icon-div">
          <label for="card-3-like" class="like-icon-div-child">
            <input type="checkbox" id="card-3-like" />
            <i class="far fa-heart heart-empty"></i>
            <i class="fas fa-heart heart-fill"></i>
          </label>
        </div>
        <div class="dazai-img-div img-div">
          <img
            src="https://github.com/gerrardNwoke/codePen-imgs/blob/main/imgs/dazai-figurine.png?raw=true"
            alt="sekiro-figurine"
          />
        </div>
        <div class="text-container">
          <h2 class="item-name">Osamu Dazai Funko Pop - Bungou Stray Dogs</h2>
          <p class="date"> Departure date: 31/03/2021 </p>
          <div class="pricing-and-cart">
            <div class="pricing">
              <p class="previous-price">$449</p>
              <p class="current-price">$279</p>
            </div>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>

      <div class="card-4 card-div">
        <div class="like-icon-div">
          <label for="card-4-like" class="like-icon-div-child">
            <input type="checkbox" id="card-4-like" />
            <i class="far fa-heart heart-empty"></i>
            <i class="fas fa-heart heart-fill"></i>
          </label>
        </div>
        <div class="u4-img-div img-div">
          <img
            src="https://github.com/gerrardNwoke/codePen-imgs/blob/main/imgs/u4-figurine.png?raw=true"
            alt="u4-figurine"
          />
        </div>
        <div class="text-container">
          <h2 class="item-name">
            Nathan Drake Statue - Uncharted 4: A Thief's End
          </h2>
          <p class="date"> Departure date: 31/03/2021 </p>
          <div class="pricing-and-cart">
            <div class="pricing">
              <p class="previous-price">$759</p>
              <p class="current-price">$499</p>
            </div>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  max-width: 100em;
  /* background-color: lightgreen; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  margin: auto;
  min-height: 30em;
  padding: 3em 1em 1em 1em;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  padding: 1em 1em 0 1em;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 1.5em;
  color: var(--heart-icon-color);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5em;
  padding-top: 7em;
  padding-bottom: 1em;
  box-sizing: border-box;
`;
