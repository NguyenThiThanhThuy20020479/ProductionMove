import React from "react";
import { Line, Pie} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {manufactureFactory, productLine}  from "../../data.js"
import { useState } from "react";
import "./piechar.css"
import Button from 'react-bootstrap/Button';
import { MonthAgency } from "../../data.js";
import { MonthError } from "../../data.js";
import { MonthHasProduced } from "../../data.js";
import { dataProductLine} from "../../data.js";
import "./style.css"
import {Helmet} from "react-helmet";

function LineChart() {
  return (
    <div className="container">
      <div>
        <h1>PRODUCT IMPORT REQUEST FORM</h1>
        <section class="contact-wrap">
          <form action="" class="contact-form">
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">Product Name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">Product Line</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">Number</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block">
                <label for="">Date</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-block textarea">
                <label for="">Note</label>
                <textarea rows="3" type="text" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <button class="square-button">Send</button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
}
  
  export default LineChart;