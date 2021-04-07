"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";

import View from "./view";
import createMethods from "./createMethods";

const { renderStyles } = withStyle;

const body = new Body(),
      view =

        <View/>

      ,
      model = null,
      scheduler = null;

controller.assignMethods(createMethods, scheduler, model, view);

renderStyles();

body.mount(view);
