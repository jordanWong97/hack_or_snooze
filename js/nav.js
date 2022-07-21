"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

const $storyForm = $('.new-story-form')

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/**Show the form to submit a new story when the navigation button submit is
 * clicked */


//naming consistant
function showSubmitStoryFormOnClick(evt) {
  $storyForm.slideToggle();
  //hide and show
}

$("#nav-submit").on("click", showSubmitStoryFormOnClick);