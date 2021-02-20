import { Button, TextField } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Icon } from "@iconify/react";
import arrowUpCircleFill from "@iconify-icons/bi/arrow-up-circle-fill";

import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import $ from "jquery";
import Header from "../Header/Header";
import "./Setting.scss";

function Setting() {
  useEffect(() => {
    $(".setting-mobile-title-bar").click(function () {
      $(this).next(".setting-mobile-box").slideToggle();
    });
  }, []);

  return (
    <div className="setting">
      <Header />

      <div className="setting-layout">
        <div className="setting-layout-items">
          <label>Profile Setting</label>
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Username"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Date of Birth"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Add Perfence"
          />
          <Button
            className="setting-layout-items-button"
            type="button"
            variant="outlined"
          >
            Update Profile Change
          </Button>
        </div>

        <div className="setting-layout-items">
          <label>Payment Information</label>
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Payment Method"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Payment Info"
          />
          <Button
            className="setting-layout-items-button"
            type="button"
            variant="outlined"
          >
            Update Payment Perferance
          </Button>
          <span className="setting-layout-items-span">
            Note: payouts are done every Monday and friday between 12PM to 6PM
            (IST){" "}
          </span>
        </div>

        <div className="setting-layout-items">
          <label>Password Settings</label>
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Current Password"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="New Password"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Confirm Password"
          />
          <Button
            type="button"
            className="setting-layout-items-button"
            variant="outlined"
          >
            Update New Password
          </Button>
        </div>
      </div>

      <div className="setting-layout">
        <div className="setting-layout-items">
          <label>Link to Social Media</label>

          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Facebook"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Instagram"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Telegram"
          />
          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="whatsapp"
          />
          <Button
            type="button"
            className="setting-layout-items-button"
            variant="outlined"
          >
            Update Social Media
          </Button>
        </div>

        <div className="setting-layout-items">
          <label>Withdraw Balance</label>

          <TextField
            className="setting-layout-items-inputs"
            variant="outlined"
            size="small"
            label="Amount"
          />

          <Button
            type="button"
            className="setting-layout-items-button"
            variant="outlined"
          >
            Withdraw
          </Button>
        </div>
        <div className="setting-layout-items"></div>
      </div>

      <div className="setting-mobile">
        <label className="setting-mobile-label">Settings</label>
        <div className="setting-mobile-window">
          <div className="setting-mobile-title-bar">
            <label>Profile Settings</label>
            <div className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div className="setting-mobile-box">
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Username"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Date of Birth"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Add Perfence"
            />
            <Button
              className="setting-mobile-button"
              type="button"
              variant="outlined"
            >
              Update Profile Change
            </Button>
          </div>
        </div>
        <div className="setting-mobile-window">
          <div id="title_bar" className="setting-mobile-title-bar">
            <label>Password Settings</label>
            <div id="button" className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div id="box" className="setting-mobile-box">
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Current Password"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="New Password"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Confirm Password"
            />
            <Button
              className="setting-mobile-button"
              type="button"
              variant="outlined"
            >
              Update New Password
            </Button>
          </div>
        </div>

        <div className="setting-mobile-window">
          <div id="title_bar" className="setting-mobile-title-bar">
            <label>Payment Settings</label>
            <div id="button" className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div id="box" className="setting-mobile-box">
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Payment
            Method"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Payment 
            Information"
            />

            <Button
              className="setting-mobile-button"
              type="button"
              variant="outlined"
            >
              Update Payment Preferance
            </Button>
            <span className="setting-layout-items-span">
              Note: payouts are done every Monday and friday between 12PM to 6PM
              (IST){" "}
            </span>
          </div>
        </div>

        <div className="setting-mobile-window">
          <div className="setting-mobile-title-bar">
            <label>Link to Social Media</label>
            <div className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div id="box" className="setting-mobile-box">
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Facebook"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Instagram"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Telegram"
            />
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="whatsapp"
            />
            <Button
              className="setting-mobile-button"
              type="button"
              variant="outlined"
            >
              Update Social Media
            </Button>
          </div>
        </div>

        <div className="setting-mobile-window">
          <div id="title_bar" className="setting-mobile-title-bar">
            <label>Widthdraw Payment</label>
            <div id="button" className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div id="box" className="setting-mobile-box">
            <TextField
              className="setting-mobile-inputs"
              variant="outlined"
              size="small"
              label="Amount"
            />

            <Button
              className="setting-mobile-button"
              type="button"
              variant="outlined"
            >
              Withdraw
            </Button>
          </div>
        </div>
      </div>

      <div className="setting-line"></div>

      <div className="setting-table">
        <label className="setting-label">Transaction History</label>
      </div>
      <div className="setting-mobile">
        <label className="setting-mobile-label">Transaction History</label>
        <div className="setting-mobile-window">
          <div className="setting-mobile-title-bar">
            <label>Sr. No 1</label>

            <label>Jan 21 2020, 15:05:04</label>
            <div className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div className="setting-mobile-box">
            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">PayID </label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">1001</label>
            </div>
            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">
                Amount($)
              </label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">$5</label>
            </div>

            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">Message</label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">
                pending confirmation
              </label>
            </div>
          </div>
        </div>

        <div className="setting-mobile-window">
          <div className="setting-mobile-title-bar">
            <label>Sr. No 1</label>

            <label>Jan 21 2020, 15:05:04</label>
            <div className="button">
              <ArrowDropDownIcon
                fontSize="large"
                className="setting-mobile-icon"
              />
            </div>
          </div>
          <div className="setting-mobile-box">
            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">PayID </label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">1001</label>
            </div>
            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">
                Amount($)
              </label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">$5</label>
            </div>

            <div className="setting-mobile-box-item">
              <label className="setting-mobile-box-item-label1">Message</label>
              <label className="setting-mobile-box-item-label2">: </label>
              <label className="setting-mobile-box-item-label3">
                pending confirmation
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="setting-mobile-up-icon">
        <Icon
          icon={arrowUpCircleFill}
          color="#105A80"
          className="login-data-arrow-icon"
          onClick={(e) => window.scrollTo({ top: 0 })}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Setting;
