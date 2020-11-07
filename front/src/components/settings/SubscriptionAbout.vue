<template>
  <div class="subscription-popup">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="subscription-popup__about">
          <span>SELECT A PLAN TO USE THE PLATFORM</span>
        </div>
      </b-col>
      <b-col cols="12" lg="10">
        <div class="subscription-popup__content">
          <div class="subscription-popup__heading">
            <h6>ACTIVATE SUBSCRIPTION</h6>
          </div>
          <div class="subscription-popup__question">
            <p>
              Do you want to activate the
              <strong>"PRO PLAN"</strong> subscription ?
            </p>
            <ul>
              <li>
                <a href="#" class="subscription-popup__question-icon subscription-popup__question-icon--accept">
                  <img src="@/assets/img/icons/check-white.svg" />
                </a>
              </li>
              <li>
                <a href="#" class="subscription-popup__question-icon subscription-popup__question-icon--cancel">
                  <img src="@/assets/img/icons/times-white.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="subscription-popup__more">
          <img src="@/assets/img/icons/info.svg" />
          <span>More Details</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>