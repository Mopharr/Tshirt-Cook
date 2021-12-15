import React from 'react'
import styled from 'styled-components'

const Details = () => {
    return (
      <Container>
        <Main>
          <Top>
            <div className="shipping">
              <div className="trust-signal">
                <span className="trust-signal-icon">
                  <svg
                    viewBox="0 0 293.4 287.8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 132.8v-7.9c.1-.4.2-.7.2-1.1.1-1.8.1-3.5.3-5.2.5-4.2 1-8.4 1.6-12.6.6-4.8 1.6-9.6 2.9-14.3 1.7-6 4.1-11.7 7.1-17.1 1.7-3 3.4-6 5.2-9 2.7-4.8 5.7-9.3 9-13.6 3.9-4.8 8.4-9.1 13.3-12.8s10-7.1 15.2-10.5c7-4.4 14.3-8.1 22-11.2 2.4-1 4.9-1.9 7.3-2.8 3-1.1 6.1-2.1 9.2-3.1s6.2-1.9 9.3-2.7c3.4-.9 6.9-1.8 10.3-2.6 2.2-.5 4.3-1 6.5-1.4 2.7-.5 5.4-1 8.2-1.4 3.6-.5 7.1-1 10.7-1.5 3.3-.4 6.6-.8 9.9-1.1 4.2-.3 8.4-.7 12.6-.8 3.1-.1 6.3.3 9.4.4 4.2.1 8.4.5 12.7 1 4.4.6 8.8 1.6 13 2.9 3.4 1 6.6 2.2 9.9 3.5 2.5 1 5 2.2 7.4 3.4 2.6 1.4 5.1 2.9 7.6 4.5 3 1.9 5.9 3.8 8.8 6 3.8 2.9 7.6 5.8 11.2 8.9 3.2 2.7 6.2 5.6 9.1 8.5 3.6 3.6 7 7.4 10.4 11.2 4.8 5.2 9.2 10.8 13.1 16.7 2.4 3.5 4.5 7.2 6.3 11.1 1.2 2.6 2.4 5.3 3.4 7.9 1.2 3 2.4 6 3.3 9.1 1.5 4.6 2.7 9.3 3.7 14.1.5 2.6 1.1 5.3 1.6 7.9.7 3.7 1.2 7.4 1.3 11.1.4 8.9-.1 17.9-1.7 26.7-.9 5.6-2.2 11.2-4 16.6-1.7 4.9-3.5 9.8-5.2 14.7-3.1 8.6-5.7 17.3-9.5 25.6-1.7 3.6-3.4 7.3-5.4 10.8-2.2 3.9-4.6 7.6-7.3 11.2-4.6 6.5-10.1 12.4-16.3 17.4-5.9 4.6-11.8 9.2-17.8 13.7-3.2 2.4-6.7 4.4-10.1 6.5-4.3 2.5-8.8 4.7-13.4 6.5-2.3.9-4.6 1.9-7 2.7-3.4 1.1-6.9 2-10.4 2.7-2 .4-4 .9-6.1 1.3-2.5.5-5 .7-7.5 1.2-6.7 1.2-13.4 1.9-20.2 2.1-6.8.3-13.7.1-20.5-.4-5.3-.4-10.7-1-15.9-2-7.7-1.4-15.2-3.8-22.3-7.2-9.4-4.7-18.4-9.9-27.2-15.7-5-3.4-9.7-7.4-13.9-11.8-3.6-3.7-7.3-7.3-10.8-11-2.3-2.4-4.6-4.8-6.8-7.4-1.9-2.2-3.6-4.6-5.5-6.9-3.8-4.4-7.1-9.2-10.1-14.2-2.5-4.2-4.8-8.5-6.8-13-1.1-2.6-2.1-5.1-3.1-7.7-.6-1.6-1.2-3.3-1.7-5-.7-2.5-1.2-4.9-1.8-7.4-.6-2.8-1.3-5.5-1.7-8.3-.6-4.1-1.2-8.3-1.6-12.5s-.7-8.5-.9-12.8c-.2-3.7-.4-7.4-.6-11 .3-.4.2-.6.1-.9z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M93 192.5v-1.4c.1-.2.2-.4.3-.7.1-.7.1-1.5.2-2.2.4-4 2.1-7.7 4.9-10.5 2.1-2.1 4.7-3.7 7-5.6.7-.5 1.6-.8 2.6-.8.5 0 1-.2 1.4-.5 3.1-2.8 6.7-5 10.5-6.7 4.6-2 9.4-3.6 14.4-4.6 2.9-.6 5.6-1.2 8.5-1.6 3.8-.6 7.7-1.1 11.5-1.6l5.1-.6c.6-.1 1-.1.9-1-.2-1.7 1.4-2.9 3.1-2.6 2.3.3 4.5.6 6.9.7s4.9-.1 7.3-.1c2.1 0 4.1.1 6.2.3 3.8.3 7.7.4 11.5 1 5.5.8 11.1 1.9 16.5 3.1 4.7 1.1 9.4 2.4 13.6 5 2.9 1.6 5.6 3.7 8 6.1 2.7 2.9 3.8 6.9 2.9 10.8-.7 2.9-1.8 5.6-3.5 8.1-2.3 3.5-5.1 6.6-8.4 9.2-5.6 4.2-11.6 7.8-17.9 10.6-5.7 2.7-11.6 5-17.8 6.7-7.4 2.1-14.8 4-22.3 5.7-10.6 2.1-21.4 2.6-32.1 1.5-4.6-.2-9.2-.9-13.6-2.1-5.2-1.3-10.3-3.4-14.9-6-2.4-1.2-4.5-2.9-6.2-4.8-3.4-4.2-5.7-9-5.9-14.6-.3-.4-.5-.6-.7-.8z"
                      fill="#5dd4f6"
                    ></path>
                    <path
                      d="M106.3 182.4c-4.8-.1-8.4-.3-11.9-1.6-3.7-1.3-7-3.3-9.9-5.9-3.4-3-5.6-7.1-6.2-11.6-.4-2.2-.4-4.4-.1-6.5.2-1.5.4-3.1.5-4.7.3-2.1.9-4.1 1.7-6.1 1.4-3.4 2.8-6.7 4.4-10 2-4.1 4.5-7.9 7.4-11.4 2.5-3.1 5.1-6 7.8-8.8 7.5-7.3 16-13.5 25.3-18.2 3.4-1.7 6.7-3.4 10.1-5.1 2.9-1.5 5.9-3 8.9-4.2 3.7-1.5 7.5-2.8 11.3-3.9 3.1-.9 6.2-1.9 9.2-2.9 2.9-1 5.9-1.6 8.9-2 2.3-.3 4.6-.6 7-.9 1.8-.1 3.5-.3 5.3-.4s3.7-.1 5.6-.1c3.9 0 7.8.5 11.6 1.5 2.1.6 4.3 1.1 6.4 1.8 1.7.5 3.4 1.2 4.8 2.3 1.7 1.2 3.1 2.7 4.4 4.4.8 1.2 1.2 2.6 1.4 4 .6 3.7-.3 7.1-1.6 10.5-2 5.1-4.7 9.7-8 14.1-2.3 3.1-4.7 6-7.1 9-1.3 1.6-2.6 3.1-4.1 4.6-2.5 2.6-5.1 5.2-7.7 7.7-4.8 4.3-9.6 8.6-14.6 12.7-5.1 4.2-10.3 8-15.8 11.5-3.4 2.1-7 4.2-10.5 6.2-2.8 1.5-5.7 3-8.6 4.5-5.2 2.6-10.7 4.7-16.3 6.3-1.5.4-3.1.9-4.6 1.4-2.3.7-4.7 1.2-7.1 1.4z"
                      fill="#a6e8a1"
                    ></path>
                    <path
                      d="M200.8 75.5c-.9-3.8-2.6-7.2-5.6-9.7-1.8-1.4-3.7-2.6-5.7-3.4-2.6-1.1-5.3-2-8.1-2.6-7.2-1.7-14-.4-20.3 3.3-1.2.8-2.4 1.8-3.6 2.7 4.4 5.6 7.9 13.8 2.2 19-3.2 2.8-7.5 4-11.6 3.4 1.1 2.3 2.6 4.3 4.5 6 1.2 1.2 2.6 2.1 4.1 2.9 3.8 2.1 8 3.1 12.3 3.3 12 0 19.8-3.8 24.2-7 2.6-1.8 4.5-4.3 5.9-7.2 1.3-2.7 2-5.6 2.1-8.6-.2-.8-.3-1.4-.4-2.1z"
                      fill="#ff596f"
                    ></path>
                    <g fill="#19124f">
                      <path d="M160.7 116.4c-.4-.7-1.4-1-2.2-.7-1.2.5-2.5 1.2-3.7 1.9l-6.3 4.2c-1.1.7-2.2 1.5-3.3 2.2-8.1 5.4-16 11.3-23.9 17.4-2.6 1.9-5.1 3.9-7.6 5.8-4 3-7.9 6-11.9 9.1-7.5 5.8-13.5 10.8-18.7 15.7l-1.5 1.5c-5.3 5.1-10.9 10.3-16.3 15.5-7.5 7.2-13.4 13.1-18.7 18.5-2.2 2.2-4.4 4.5-6.5 6.7l-.1.1v.2c-.1 1-.1 1.8 0 2.8v.2l.1.1c.2.3.5.5.8.8.1.1.2.1.4.2.1.1.4.2.4.3l.2.1h1l.2-.2c3.1-3.1 6-6.2 8.9-9 3.8-3.8 7.5-7.6 11.6-11.8.5-.5 1.2-.9 2-1 3.1-.7 6.4-1.1 9.6-1.3 13-.9 26.4-1.8 39.5-2.5 4.8-.3 9.8-.5 14.6-.7l7.5-.3c6.1-.3 12.1-.5 18.2-.8.5 0 1-.1 1.4-.3.8-.3 1.3-1 1.2-1.8.1-.8-.4-1.5-1.2-1.9-.3-.1-.7-.2-1-.2l-.7-.1c-.7-.1-1.5-.1-2.3-.1-2.8 0-5.6.1-8.3.1l-3 .1c-1.5 0-3 .1-4.5.1-3.4.1-7 .1-10.5.2-9.9.4-19.9.9-29.8 1.4-5.5.3-11.1.7-16.5 1l-3.2.2c-1.7.1-3.4.3-5 .4h-.2l1.7-1.6c2.3-2.2 4.6-4.5 7-6.7l2.2-2.1c2.6-2.5 5.3-5.1 8.1-7.5 5.3-4.8 10.9-9.2 17.2-14.1 2.6-2 5.2-4 7.7-5.9 2.4-1.8 4.8-3.6 7.2-5.5 9.4-7.3 18.8-14.4 28.3-21.1 2.2-1.5 4.4-3.1 6.4-4.8.9-.7 1.8-1.3 2.6-2.1.3-.2.5-.5.7-.7.7-.4.7-1.4.2-2z"></path>
                      <path
                        d="M139.5 65.9c-1.6-3.2-3.2-6.4-4.8-9.7l-1.2-2.7c-.1-.2-.2-.5-.2-.7-.2-.8.2-1.5 1-1.9.7-.3 1.6.1 1.9.8.1.3.3.7.4 1 2 4 4 8 5.9 12 2.5-1.2 5.2-1.8 7.9-2-.7-1.6-1.2-3.2-1.9-4.7-1.3-2.6-2.8-5.1-4.1-7.6-.1-.3-.3-.6-.4-.9-.3-.7-.1-1.6.7-2 .7-.4 1.5-.2 2.1.4.4.4.7 1 1 1.5 2.8 4 4.4 8.3 6 12.8.1.2.1.5.1.7l.9.2c4.9 1.3 8.5 4.2 10.3 9 1.8 5.4-.1 11.4-4.6 14.7-1.5 1.1-3.2 2-5.1 2.6-3.8 1.4-7.8 1.4-11.7.9-2.5-.2-4.8-1.5-6.2-3.6-1.3-1.6-2.3-3.5-2.7-5.6-.5-2.6-.5-5.1-.1-7.7.6-2.9 2.4-5.6 4.8-7.5zm9.7 18.7c2.2 0 4-1.5 4.5-3.6.2-.7.2-1.3 0-2-.1-.3-.4-.4-.7-.6-.3 0-.6.1-.8.4-.1.1-.1.4-.1.7-.1.6-.3 1.2-.5 1.8-.5 1-1.7 1.5-2.7 1-.4-.1-.7-.4-.8-.7-.4-.6-.7-1.2-.9-2-.3-.7-.8-1.1-1.5-.9-.6.2-.9.9-.7 1.5.4 1.4 1.1 2.6 2.2 3.6.5.5 1.2.8 2 .8zm-3.5-9.9c.8.1 1.5-.5 1.5-1.3.1-.8-.5-1.5-1.3-1.5-.8-.1-1.5.5-1.5 1.3v.1c-.1.8.5 1.4 1.3 1.4zm6.7-3.3c-.7 0-1.3.7-1.3 1.4v.1c-.1.6.4 1.2 1 1.2h.1c.7.1 1.4-.5 1.5-1.3v-.1c0-.6-.5-1.3-1.3-1.3z"
                        stroke="#19124f"
                        stroke-miterlimit="10"
                        stroke-width=".732"
                      ></path>
                      <path d="M167.7 83.6c.1-.6.1-1.2.2-1.8.8-3.6 4.2-5.1 7.5-3.4 2.2 1.2 3.3 3.7 2.8 6.1-.5 2.3-2.3 4-4.5 4.4-3 .7-6.1-1-6-5.3zM186.5 82.8c0-1.2.2-2.3.7-3.4.5-1.3 1.8-2.1 3.2-2.1 1.9-.1 3.7.7 4.8 2.3 1.9 2.6.6 7.2-3 8.1-2.2.6-5.6-1-5.6-4.2zM178.2 68.1c.1-1 .4-2.1 1-2.9.7-1.5 2.3-2.3 3.9-2 3.1.4 5.6 3.6 4.7 6.7-.9 3.3-4.7 4.8-7.4 2.9-1.5-1.2-2.2-2.9-2.2-4.7z"></path>
                    </g>
                  </svg>
                </span>
                <div>
                  <div className="trust-signal-heading">Carbon Neutrality</div>
                  <div className="trust-signal-text">
                    Investing in programs that help the environment
                  </div>
                  <div className="trust-signal-support">
                    <a
                      className="trust-signal-support-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="trust-signal">
                <span className="trust-signal-icon">
                  <svg
                    viewBox="0 0 293.4 287.8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 132.8v-7.9c.1-.4.2-.7.2-1.1.1-1.8.1-3.5.3-5.2.5-4.2 1-8.4 1.6-12.6.6-4.8 1.6-9.6 2.9-14.3 1.7-6 4.1-11.7 7.1-17.1 1.7-3 3.4-6 5.2-9 2.7-4.8 5.7-9.3 9-13.6 3.9-4.8 8.4-9.1 13.3-12.8s10-7.1 15.2-10.5c7-4.4 14.3-8.1 22-11.2 2.4-1 4.9-1.9 7.3-2.8 3-1.1 6.1-2.1 9.2-3.1s6.2-1.9 9.3-2.7c3.4-.9 6.9-1.8 10.3-2.6 2.2-.5 4.3-1 6.5-1.4 2.7-.5 5.4-1 8.2-1.4 3.6-.5 7.1-1 10.7-1.5 3.3-.4 6.6-.8 9.9-1.1 4.2-.3 8.4-.7 12.6-.8 3.1-.1 6.3.3 9.4.4 4.2.1 8.4.5 12.7 1 4.4.6 8.8 1.6 13 2.9 3.4 1 6.6 2.2 9.9 3.5 2.5 1 5 2.2 7.4 3.4 2.6 1.4 5.1 2.9 7.6 4.5 3 1.9 5.9 3.8 8.8 6 3.8 2.9 7.6 5.8 11.2 8.9 3.2 2.7 6.2 5.6 9.1 8.5 3.6 3.6 7 7.4 10.4 11.2 4.8 5.2 9.2 10.8 13.1 16.7 2.4 3.5 4.5 7.2 6.3 11.1 1.2 2.6 2.4 5.3 3.4 7.9 1.2 3 2.4 6 3.3 9.1 1.5 4.6 2.7 9.3 3.7 14.1.5 2.6 1.1 5.3 1.6 7.9.7 3.7 1.2 7.4 1.3 11.1.4 8.9-.1 17.9-1.7 26.7-.9 5.6-2.2 11.2-4 16.6-1.7 4.9-3.5 9.8-5.2 14.7-3.1 8.6-5.7 17.3-9.5 25.6-1.7 3.6-3.4 7.3-5.4 10.8-2.2 3.9-4.6 7.6-7.3 11.2-4.6 6.5-10.1 12.4-16.3 17.4-5.9 4.6-11.8 9.2-17.8 13.7-3.2 2.4-6.7 4.4-10.1 6.5-4.3 2.5-8.8 4.7-13.4 6.5-2.3.9-4.6 1.9-7 2.7-3.4 1.1-6.9 2-10.4 2.7-2 .4-4 .9-6.1 1.3-2.5.5-5 .7-7.5 1.2-6.7 1.2-13.4 1.9-20.2 2.1-6.8.3-13.7.1-20.5-.4-5.3-.4-10.7-1-15.9-2-7.7-1.4-15.2-3.8-22.3-7.2-9.4-4.7-18.4-9.9-27.2-15.7-5-3.4-9.7-7.4-13.9-11.8-3.6-3.7-7.3-7.3-10.8-11-2.3-2.4-4.6-4.8-6.8-7.4-1.9-2.2-3.6-4.6-5.5-6.9-3.8-4.4-7.1-9.2-10.1-14.2-2.5-4.2-4.8-8.5-6.8-13-1.1-2.6-2.1-5.1-3.1-7.7-.6-1.6-1.2-3.3-1.7-5-.7-2.5-1.2-4.9-1.8-7.4-.6-2.8-1.3-5.5-1.7-8.3-.6-4.1-1.2-8.3-1.6-12.5s-.7-8.5-.9-12.8c-.2-3.7-.4-7.4-.6-11 .3-.4.2-.6.1-.9z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M183.9 156.3c-2.2-2.1-11.3-16.1-13.4-19.2-1.9-2.8-5.2-6.9-6.7-12.5-10.7 13.4-30 34.2-41.2 44.4-3.9 2.7-7.5 4.8-11 .7-9.5-10.7 28.1-61.5 38-74.3 14-15.1 35.4-18.9 53.8-26.6-25.9-22.1-62.2-25.3-93.9-15.1-2.1 15.6-22.7 57.1-28.8 52-5.7-5.9-12.6-10.3-18.4-16-2.3 3-3.7 6.5-5.5 9.9 24.6 13.7 18.8 96.3 9.4 95.2 5.8 8.3 12.9 15.7 21.1 21.8 0 0 110.5 4.6 111.3 5.5 23.3-14.5 38.6-40.5 41.5-67.6-12.9-5.7-54.2 1.5-56.2 1.8z"
                      fill="#5dd4f6"
                    ></path>
                    <path
                      d="M240.4 139.2c-.1-2.1-.3-4.2-.5-6.2-.3-2.3-.6-4.6-1.1-6.8-.8-3.4-1.6-6.8-2.6-10.1-1.6-5.3-3.7-10.5-6.4-15.4-1.5-2.8-3.1-5.6-4.8-8.2-2-3.1-4.1-6.1-6.5-8.9-1.3-1.5-2.5-3.1-3.9-4.6l-.8-.8c-.4.5-.8.8-1.4 1.1-5.9 2.6-10.9 6.6-16.2 10.2-5.6 3.7-11.8 6.5-17.6 10l-.1.1c.5 1.2 1.3 2.4 2.1 3.4 1.9 2.2 4.9 3 7.5 4 6.8 2.5 13.2 5.3 18.6 10.3.8.7 1.2 1.7 1.2 2.7 2.4 4.1 1.7 8.4-1.7 13.2-4.1 5.9-8.9 13.8-15.5 17.1-7.4 3.8-12.6-3.2-16.7-8.4-1.2-1.5-2.4-3.1-3.4-4.7.2 1 .2 1.9.2 2.9.1 3.7 0 7.4 0 11-.1.9.2 1.9.6 2.7.9 1.4 2 2.7 3.2 3.7.9.8 2 1.4 3.1 1.7 2 .5 4 .6 6.1.3 2.7-.3 5.5-.8 8.2-1.2 2-.3 3.9-.7 5.9-1s4.1-.7 6.2-1.1c1.4-.2 2.9-.4 4.3-.6 2.6-.4 5.1-.8 7.7-1.2 2.1-.3 4.1-.5 6.2-.5 2.1-.1 4.1-.2 6.2-.2 1.4.1 2.7.2 4.1.5 1.1.2 2.3.5 3.4.6 1.4.2 2.8.2 4.2.2.1-.2.2-.5.2-.8.2-1.5.4-3.1.4-4.7-.3-3.4-.4-6.8-.4-10.3zM57 99.5c2.3 1 4.3 2.4 6.1 4.2 1.4 1.4 3 2.9 4.4 4.5 1.7 1.8 3.1 3.9 4.3 6.1 1.4 2.4 2.7 4.9 3.8 7.5.5 1.3 1 2.7 1.2 4 .5 2 .8 4 1.2 6 .5 2.3.8 4.6 1.4 6.8s1.4 4.4 2.1 6.6c.4 1.1.9 2.3 1.3 3.5.8 2.1 1.9 4 3.3 5.8 1.4 1.7 3 3.3 4.8 4.6 1.8 1.4 3.7 2.9 5.5 4.3 2.6 1.8 5.2 3.6 7.8 5.3 3.2 2.1 6.2 4.4 9.1 7 1.2 1.2 2.5 2.3 3.7 3.4.6.6 1.2 1.2 1.7 1.9.4.5.6 1.1.7 1.7.2 1.6 0 3.3-.4 4.9-.1.2-.2.3-.3.5-2.1 2.5-4.9 4.2-8.1 4.9-2.1.5-4.2.8-6.3 1.1-2.3.3-4.6.5-6.8.8s-4.5.3-6.8.5c-5.2.5-10.3.4-15.5.3-2.1 0-4-.3-6-.5-.9-.1-1.9-.2-2.8-.2-.3-.4-.6-.7-.9-1.1-3.3-4.7-6.1-9.7-8.4-14.9-1.1-2.4-2.1-5-3-7.5-1.3-3.3-2.3-6.7-3-10.1-.6-2.7-1.1-5.6-1.6-8.3-.3-2.1-.5-4.3-.8-6.4-.4-3.6-.5-7.2-.3-10.9 0-1.8.2-3.7.4-5.4.3-2.4.7-4.8 1.1-7.2.8-4.7 1.9-9.4 3.5-13.8 1-3.1 2.2-6.2 3.7-9.1-.4-.3-.3-.5-.1-.8zM87.2 216.7l3.9-.8c4.3-.8 8.6-1.7 12.8-3.1 1.5-.5 3-1.1 4.5-1.9 3.3-1.7 6.9-3.1 10.4-4.5 1.1-.5 2.3-1.1 3.4-1.5 3.4-1.5 6.8-3.3 10.4-4.6 2.4-.8 4.9-1.3 7.5-2 2-.5 3.9-1 5.9-1.4 1.2-.2 2.4-.3 3.7-.5.9-.1 1.8-.2 2.7-.2 2.4 0 4.9.2 7.2.5 2.3.2 4.6.8 6.7 1.6 2.1.9 4.3 1.9 6.3 3 2.4 1.3 4.7 2.6 7 4 1.9 1.2 3.7 2.6 5.5 3.9 4 3.1 7.7 6.5 11.2 10.3.8.8 1.4 1.6 2.2 2.4-.8.5-1.5 1.1-2.3 1.6-4.6 2.7-9.5 5.1-14.5 7-4.2 1.6-8.5 2.9-12.9 3.9-2.4.6-4.9.9-7.5 1.4-1.5.2-3 .4-4.6.5-1.8.2-3.7.3-5.4.4-2.3.1-4.6.2-6.8.2-2.3-.1-4.4-.3-6.5-.5-1.6-.2-3.3-.3-4.9-.5-2.1-.3-4.2-.7-6.3-1.1-4.5-.9-8.8-2.2-13.1-3.8-2.3-.8-4.6-1.7-6.8-2.7-2.1-.9-4.1-1.9-6.2-3-4.6-2.4-9-5.2-13.2-8.4 0 0-.1-.1-.3-.2zM109.5 53.6c-.3 2.4-.6 4.6-.9 7-.5 3.7-.3 7.4-.4 11.1v10.7c0 1.5-.2 3-.3 4.5-.1.9-.1 1.9-.2 2.8-.4 3.7-.5 7.3-.3 11 0 2.4.2 4.7.4 7.1.3 2.9.4 5.8.3 8.7 0 1.6-.4 3.2-.9 4.7-.5 1.4-1.7 2.5-3.3 2.9-1.5.5-3 .8-4.6.3-.9-.3-1.7-.7-2.5-1.3-2-1.5-3.8-3.3-5.2-5.4-1-1.3-2-2.5-3-3.7-1.3-1.6-2.6-3.2-4-4.7-1.1-1.3-2.4-2.4-3.7-3.6-.2-.2-.4-.3-.5-.5-3.3-3.2-6.8-6.2-10.5-9.1-1.7-1.3-3.3-2.7-4.9-4.1-.8-.8-1.6-1.5-2.4-2.4.1-.2.2-.5.3-.8 1.7-2.7 3.7-5.4 5.7-7.9 2.7-3.3 5.6-6.4 8.7-9.4 2.7-2.6 5.6-4.9 8.7-7.1 4-2.7 8.2-5.1 12.7-7 3.1-1.4 6.3-2.4 9.6-3.7.2.1.8 0 1.2-.1z"
                      fill="#a6e8a1"
                    ></path>
                    <path
                      d="M112.9 167.7c0-.1-.1-.2-.1-.2-2.7-.6-4.9-4.1-4.8-7 .1-3 .4-6.1 1-9.1 1.4-7.4 3.7-14.5 5.7-21.7 3.2-10.7 6.2-21.4 9.5-32.1 1.3-4.2 2.8-8.4 4.3-12.6-.5-.4-1.1-.9-1.7-1.4-1.6-1.4-3.1-2.9-4.4-4.6-1.3-1.4-2.1-3.3-2.5-5.2-.3-1.3-.2-2.7.5-3.9.5-1 .9-2.1 1.4-3 .9-1.6 2.1-3 4-3.5 4.5-1.4 9.4-.9 13.5 1.3 1.7.9 3.3 2 4.9 3 .3.2.5.4.9.2 3-1.1 6.2-2.1 9.3-2.8 6.4-1.7 12.8-3.4 19.2-4.9 4.3-1.1 8.7-2 13-2.9 4-.8 7.8-1.5 11.8-2.2 3.4-.6 6.8-1.1 10.3-1.5 2.7-.3 5.4-.5 8.1-.5 1.6-.1 3.2-.1 4.8 0 1 .1 1.9.2 2.9.4 1.5.5 2.7 1.8 2.8 3.4.1 1.8-.7 3.6-2.1 4.7-2.5 2.2-5 4.4-7.8 6.3-7.5 5.6-15.3 10.8-23.2 15.7-1.9 1.2-3.8 2.5-5.6 3.8-3.1 2.1-6.4 4.1-9.8 5.9-1.1.6-2.2 1.3-3.3 1.9 1.1 1.8 2.1 3.7 3.6 5.2.5.5 1.1.8 1.7 1 2.1.8 4.3 1.7 6.5 2.4 4.2 1.4 8.2 3.3 12.2 5.1 2.1.9 4.1 1.9 6.2 2.9.6.3 1.2.7 1.7 1.2 1 1.1 1.3 2.6.8 4-.9 3.9-2.6 7.5-5 10.7-3.3 4.5-7 8.6-11 12.3-2 1.9-4.2 3.4-6.6 4.6-.4.2-.8.4-1.3.5-1.1.2-2.1-.1-2.8-.8-1.4-1.4-2.6-3-3.5-4.7-1.8-3.1-3.3-6.4-4.9-9.7-2.3-4.9-4.4-9.8-7.4-14.4-.3-.5-.7-.8-1.2-1-1.1-.4-2.3-.9-3.4-1.4l-3.3 4.2c-3.8 5.2-7.5 10.6-11.5 15.8-5.8 7.5-11.5 14.9-17.7 22-3 3.4-6.1 6.6-9.4 9.6-1.4 1.2-2.9 2.2-4.6 2.9z"
                      fill="#ff596f"
                    ></path>
                    <g
                      fill="#19124f"
                      stroke="#1d184e"
                      stroke-miterlimit="10"
                      stroke-width=".989"
                    >
                      <path d="M111.3 65.4c.3-.2.6-.5 1-.5 2.9-.4 5.7-.7 8.5-.9 1-.1 1.9-.2 2.9-.2.5 0 1-.1 1.4.5-1.4 1.4-2.6 3-3.4 4.6-.5.8-.8 1.7-1.2 2.7-.2.6-.4 1.1-.5 1.7-.8-.3-1.6-.8-2.3-1.4-1.7-1.3-3.3-2.6-5-4l-1.4-1.4zM169 249.8c-6.7 0-15.5-1.7-24.1-4.7-.5-.2-.9-.4-1.3-.7-1-.7-1.1-2.1-.5-3 .5-.6 1.1-.9 1.9-.8.5 0 .8.2 1.2.2 5.3 1.9 10.8 3.2 16.4 3.9 11.8 1.4 23.3.3 34.1-4.8 14.1-6.7 23-17.6 27.3-32.6 1.8-6.6 2.5-13.5 1.9-20.3-.9-12.5-4.9-24-11.3-34.7-3.3-5.4-6.9-10.5-11-15.2-.5-.5-.8-1.1-1.2-1.6-.5-.6-.5-1.5.1-2.1.6-.5 1.5-.5 2.1 0 .5.4 1.1.8 1.5 1.3 5.6 5.6 10.3 11.9 14.1 18.9 4.3 7.7 7.4 16 9.1 24.6 2.3 12.1 1.7 24-2.7 35.6-5.9 15.3-16.7 25.9-31.9 31.7-7.5 3-15.3 4.3-25.7 4.3zM181.3 102.3c0 .5-.2 1.1-.7 1.4s-1.1.2-1.4-.1-.6-.6-.9-1c-2.7-4-5.7-7.8-9-11.4-3.6-3.8-7.6-7.2-12-10-3-2-6.2-3.8-9.6-5.4-.8-.4-1.6-.9-2.4-1.4s-.8-.8-.6-1.3.8-.6 1.5-.4c1.7.8 3.5 1.4 5.2 2.3 5.8 2.7 11.3 6.2 16.1 10.5 3.3 3 6.2 6.2 8.8 9.7 1.5 2 2.9 4 4.3 5.9.3.4.5.8.7 1.2zM148.5 122c.1.5-.2 1.1-.8 1.3-.5.2-1.1-.1-1.4-.6s-.5-1-.8-1.5c-2.4-5.6-5.2-10.8-8.4-15.9-.5-.8-.9-1.5-1.3-2.3-.2-.3-.2-.5-.2-.8-.1-.5.3-1 .8-1.1.3-.1.6.1.8.3s.3.3.4.5c3.7 5.5 7.2 11.1 9.8 17.3.3.7.5 1.4.8 2.1.2.2.3.5.3.7zM192 81.7c.1.7-.4 1.3-1.1 1.4h-.5c-.6-.2-1.1-.4-1.7-.7-2.5-1.4-5-2.7-7.5-4.1-2.8-1.5-5.6-3.1-8.4-4.6-.6-.3-1.1-.7-1.7-1.1-.3-.2-.5-.5-.8-.8-.2-.3-.2-.7.1-1 .3-.2.6-.3.9-.3.3.1.6.2.8.3l17.6 9.2c.5.2.9.5 1.4.8.6.4.7.6.9.9zM183.5 109.9l.9.3c4.9 2.5 9.9 5.1 14.8 7.6.6.3 1.2.7 1.7 1.1.5.3.6.9.4 1.4s-.8.8-1.4.6c-.2 0-.4-.1-.5-.2-.3-.2-.6-.2-.9-.5-4.4-2.4-8.9-4.8-13.3-7.2-.6-.3-1.2-.7-1.7-1.1-.3-.2-.5-.4-.8-.7-.2-.3-.2-.8 0-1 .2 0 .5-.2.8-.3zM137.1 137.3c0 1-.4 1.4-.9 1.6-.7.2-1.3-.2-1.6-.8-2-4.7-4-9.5-5.9-14.3-.4-.9-.7-1.9-1-2.9-.2-.5-.1-1 .4-1.3.5-.2 1.1 0 1.3.5v.1c.6 1.2 1.1 2.4 1.7 3.6 1.7 3.9 3.6 7.8 5.3 11.6.4.6.6 1.3.7 1.9zM190.2 132.8c.1.5-.2 1.1-.7 1.3s-1 .2-1.4-.2c-.3-.3-.6-.6-.8-.9-2.1-3.2-4.3-6.4-6.5-9.6-1.1-1.5-2.1-3.1-3.1-4.7-.3-.4-.3-.9.1-1.3l.1-.1c.4-.3 1-.3 1.3.1l.5.5c.9 1.3 1.9 2.5 2.8 3.8 2.1 2.8 4 5.7 6 8.5.4.5.8 1 1.2 1.6.3.4.5.7.5 1zM204.1 71.2c0 .9-.5 1.4-1.1 1.4-.5 0-.9-.2-1.3-.3l-11.8-5.9c-.5-.2-.9-.5-1.3-.8-.4-.2-.5-.8-.3-1.1.2-.5.7-.7 1.1-.5.2.1.5.2.8.2 3.9 1.7 7.8 3.5 11.6 5.2.6.2 1.1.6 1.7.9l.6.9zM126.4 149.6c0 1.2-.4 1.7-1 1.8-.7.2-1.4-.3-1.5-1-.7-2-1.4-4-2.1-5.9-.6-1.7-1.2-3.3-1.8-4.9-.1-.3-.2-.7-.2-1-.1-.4.2-.8.6-.8.3 0 .6.1.9.2.2.2.3.4.4.6 1.4 3 2.8 6.1 4.1 9.1.2.6.5 1.3.6 1.9zM212.9 66.2c-.5-.2-1.1-.2-1.7-.4l-9-2.5c-.5-.1-.9-.5-.8-1.1.2-.6.8-1 1.4-.8 1 .2 2 .5 3 .7 2.2.6 4.5 1.2 6.7 1.8.4.2.8.3 1.1.5.4.2.5.7.4 1.1-.2.5-.6.8-1.1.7zM130 72.8c-.2.5-.5 1.1-.7 1.7-.4.7-1.3 1-2.1.8-.8-.3-1.3-1.1-1.2-1.9.1-.5.2-1 .5-1.4.4-.8 1.2-1.2 2.1-1s1.4 1 1.4 1.8z"></path>
                    </g>
                  </svg>
                </span>
                <div>
                  <div className="trust-signal-heading">Worldwide Shipping</div>
                  <div className="trust-signal-text">
                    Available as Standard or Express delivery
                  </div>
                  <div className="trust-signal-support">
                    <a
                      className="trust-signal-support-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="trust-signal">
                <span className="trust-signal-icon">
                  <svg
                    viewBox="0 0 293.4 287.8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 132.8v-7.9c.1-.4.2-.7.2-1.1.1-1.8.1-3.5.3-5.2.5-4.2 1-8.4 1.6-12.6.6-4.8 1.6-9.6 2.9-14.3 1.7-6 4.1-11.7 7.1-17.1 1.7-3 3.4-6 5.2-9 2.7-4.8 5.7-9.3 9-13.6 3.9-4.8 8.4-9.1 13.3-12.8s10-7.1 15.2-10.5c7-4.4 14.3-8.1 22-11.2 2.4-1 4.9-1.9 7.3-2.8 3-1.1 6.1-2.1 9.2-3.1s6.2-1.9 9.3-2.7c3.4-.9 6.9-1.8 10.3-2.6 2.2-.5 4.3-1 6.5-1.4 2.7-.5 5.4-1 8.2-1.4 3.6-.5 7.1-1 10.7-1.5 3.3-.4 6.6-.8 9.9-1.1 4.2-.3 8.4-.7 12.6-.8 3.1-.1 6.3.3 9.4.4 4.2.1 8.4.5 12.7 1 4.4.6 8.8 1.6 13 2.9 3.4 1 6.6 2.2 9.9 3.5 2.5 1 5 2.2 7.4 3.4 2.6 1.4 5.1 2.9 7.6 4.5 3 1.9 5.9 3.8 8.8 6 3.8 2.9 7.6 5.8 11.2 8.9 3.2 2.7 6.2 5.6 9.1 8.5 3.6 3.6 7 7.4 10.4 11.2 4.8 5.2 9.2 10.8 13.1 16.7 2.4 3.5 4.5 7.2 6.3 11.1 1.2 2.6 2.4 5.3 3.4 7.9 1.2 3 2.4 6 3.3 9.1 1.5 4.6 2.7 9.3 3.7 14.1.5 2.6 1.1 5.3 1.6 7.9.7 3.7 1.2 7.4 1.3 11.1.4 8.9-.1 17.9-1.7 26.7-.9 5.6-2.2 11.2-4 16.6-1.7 4.9-3.5 9.8-5.2 14.7-3.1 8.6-5.7 17.3-9.5 25.6-1.7 3.6-3.4 7.3-5.4 10.8-2.2 3.9-4.6 7.6-7.3 11.2-4.6 6.5-10.1 12.4-16.3 17.4-5.9 4.6-11.8 9.2-17.8 13.7-3.2 2.4-6.7 4.4-10.1 6.5-4.3 2.5-8.8 4.7-13.4 6.5-2.3.9-4.6 1.9-7 2.7-3.4 1.1-6.9 2-10.4 2.7-2 .4-4 .9-6.1 1.3-2.5.5-5 .7-7.5 1.2-6.7 1.2-13.4 1.9-20.2 2.1-6.8.3-13.7.1-20.5-.4-5.3-.4-10.7-1-15.9-2-7.7-1.4-15.2-3.8-22.3-7.2-9.4-4.7-18.4-9.9-27.2-15.7-5-3.4-9.7-7.4-13.9-11.8-3.6-3.7-7.3-7.3-10.8-11-2.3-2.4-4.6-4.8-6.8-7.4-1.9-2.2-3.6-4.6-5.5-6.9-3.8-4.4-7.1-9.2-10.1-14.2-2.5-4.2-4.8-8.5-6.8-13-1.1-2.6-2.1-5.1-3.1-7.7-.6-1.6-1.2-3.3-1.7-5-.7-2.5-1.2-4.9-1.8-7.4-.6-2.8-1.3-5.5-1.7-8.3-.6-4.1-1.2-8.3-1.6-12.5s-.7-8.5-.9-12.8c-.2-3.7-.4-7.4-.6-11 .3-.4.2-.6.1-.9z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M129.6 130.8c11.1-4.8 24.4-5.1 35.2.2v-2.9c-.1-2.9-.2-5.9-.4-8.8-.3-3.7-.9-7.5-1.7-11.1-.6-2.9-1.8-5.6-3.5-8-1.7-2.5-4.2-4.5-7-5.9-2.1-1-4.5-1.3-6.8-.9-1.3.2-2.5.4-3.7.6-2 .4-3.9 1.3-5.5 2.5-1.6 1-2.9 2.3-4.1 3.8-1.4 2.1-2.2 4.5-2.5 7-.2 1.4-.4 2.9-.6 4.3-.2.9-.2 1.8-.3 2.7-.1 1.2-.2 2.4-.2 3.6-.3 4.5-.4 9.1-.4 13.6.4-.1.9-.4 1.5-.7z"
                      fill="#a6e8a1"
                    ></path>
                    <path
                      d="M235.6 92.4c0-.5.6-10-3.5-11.2-1.4-.4-6.9-1-8.3-1.3-1.3-.2-2.5-.5-3.7-.7-.2-.1-.5-.1-.6-.1-2.9-.1-20.8-7.7-24.3-9.7-2.7-1.5-33.7-16.3-35.6-17.9-1.5-1.3-3.1-2.4-4.6-3.7-.9-.7-1.7-1.5-2.5-2.3l-2.7 2.4c-2.3 2-4.5 4-6.9 6-4.5 3.7-9.2 7.1-14.1 10.3-2.7 1.7-5.6 3.4-8.3 5-3.3 1.8-6.7 3.6-10.1 5.2-3 1.4-6 2.7-9.1 4.1-6.7 2.9-13.4 5.3-20.3 7.5-4.8 1.5-9.7 2.9-14.5 4.3L59 92.4c-.6.2-.6.5-.6 1-.1 4.4-.2 40-.2 40.2.1 3.5.2 7 .2 10.5 0 1.8.1 3.7.2 5.5s.4 3.9.6 5.8c.2 1.7.2 3.4.4 5.1.2 1.3.3 2.5.5 3.7.2 1.3.3 2.3.4 3.5.2 2.4.6 4.8 1.1 7.1.8 2.9 1.4 5.7 2.4 8.5 1.6 4.8 3.3 9.5 5.3 14.1 1.6 3.5 3.4 6.9 5.4 10.2 1.4 2.4 3 4.6 4.7 6.8.8 1 1.7 2 2.6 2.9s1.8 1.7 2.8 2.5c1.2 1 2.4 1.9 3.6 2.8 2.8 2.1 5.6 4.1 8.4 6 3.3 2.2 6.8 4.2 10.3 6.2 4.7 2.7 9.4 5.2 14.1 7.9 3.8 2.1 7.8 4 11.8 5.6 3 1.3 6.1 2.2 9 3.9.2.2.4.2.6.4h.6c.3-.3 2.9-.8 3.8-1.1 4.3-1.4 8.5-2.8 12.7-4.3 1.1-.4 2.1-1 3.1-1.4 3.7-1.7 7.2-3.3 10.9-4.9.6-.2 15.7-9.6 17.9-11.3 2.3-1.7 4.4-3.7 6-6.1 1-1.3 2.1-2.5 3.4-3.5 1.8-1.7 3.6-3.5 5.3-5.2 2.7-2.7 6.4-4.8 8.5-7.9 2.2-3.5 8.4-16.5 8.8-17.9 1-3.8 3.1-5.4 4-9.2.6-2.7 2.7-10.7 3.2-13.5.6-3.3 3.7-35.6 3.7-36.9.1-2 1-5.7 1-7.8.1-6.8 0-19.2 0-19.2-.4-.4.1-8.9.1-10zm-43.9 84.7c-.8 2.9-1.9 5.6-3.3 8.2-1.5 2.9-3.3 5.5-5.4 8-1.6 1.9-3.3 3.7-5.2 5.2-2.3 2-4.7 3.8-7.1 5.6-2.3 1.7-4.8 3.3-7.3 4.5-2.9 1.4-6 2.4-9.1 2.8-3.3.3-6.7.5-10 .4-2.8 0-5.6-.4-8.3-1s-5.3-1.4-7.9-2.5c-2.5-1-4.9-2.4-7-4.1-2.3-2-4.4-4.1-6.2-6.5-1.4-1.6-2.5-3.3-3.4-5.1-1.3-2.8-2.4-5.7-3.3-8.7-.3-1.4-1.9-8-2.1-9.5-1-9.2.4-20.6 5.1-28.7.6-1 1.3-2 1.9-2.9.1-2.5.2-5 .2-7.5 0-5-.1-10 0-15 0-2.3.3-4.5.5-6.8.1-.9.2-1.7.2-2.6.2-2.9.7-5.8 1.4-8.6 1.4-4.8 3.6-9.3 6.7-13.3 2.1-2.6 4.7-4.7 7.6-6.2 1.8-1 3.7-2 5.7-2.9 3.4-1.4 7-1.4 10.6-1.1 2.4.2 4.8.6 7.1 1.2 2.5.6 4.9 1.5 7.1 2.9.6.4 1.2.9 1.8 1.4.3.2.6.2.8.4 1.3 1.7 2.5 3.3 3.7 5 .1.1.1.2.1.3.1.2.2.2.2.3l.1.2c.2.2.4.3.6.5 3.1 4.4 5.4 9.3 6.8 14.5.6 2.6 1.3 5.2 1.8 7.8.2 1 .2 1.9.2 2.9.2 3 .3 6 .4 9 .1 3.9.2 7.7.2 11.6v.2c.7.3 9.1 8.1 11.9 14.9 1.4 3.3 2.4 6.8 3 10.4.2 1.3.3 2.5.4 3.7.1 1.4.2 2.8.2 4.1.3 2.5-.1 4.8-.7 7z"
                      fill="#a6e8a1"
                    ></path>
                    <path
                      d="M114.3 135.3c.2 2.5 2.5 2.2 7.5-.6 12-10 4.1-15.6 10.2-34.4 21.4-22.1 35.5 9.1 31.9 29.1 5 3.5 9.5 6.9 11.5 5.3 3.7-3-1.4-33.1-4.6-41.5-15.5-16.3-30.6-15.4-43.5-8.6-10.3 5.6-15 31-13 50.7z"
                      fill="#5dd4f6"
                    ></path>
                    <path
                      d="M105.9 165v-4c.1-.1.2-.2.2-.3.2-2.3.1-4.8.8-7 2.9-9.1 20.2-27.2 32.4-28.9 3.5-.6 7.1-.6 10.6-.2 2 .2 4 .7 6 1.1 7.5 1.5 14.2 4.8 19.5 10.3 10.2 10.5 10.8 35.7 6 45.5-1.4 1.8-2.7 3.8-4.1 5.7-.6.8-1.1 1.6-1.8 2.2-1.7 1.4-3.6 2.8-5.3 4.1-1.7 1.4-19 9.1-22.6 9.1-.2 0-.3.1-.5.2H145c-.1-.1-.2-.2-.3-.2-1.4-.2-2.7-.2-4.1-.4-2.9-.2-5.7-.9-8.4-2-4.6-1.9-9.1-4.3-13.3-7.1-1.1-.7-2.1-1.6-2.9-2.5-4.8-5.2-7.5-11.6-9.3-18.4-.6-2.1-.8-4.2-.8-6.4.2-.2.1-.5 0-.8zm33.5 2c.7-.6 1.4-1 2.1-1.6 3.9-2.9 4.7-8.3 1.8-12.2 0-.1-.1-.1-.2-.2-1.4-2.1-3.4-3.6-5.8-4.1-3.2-.7-6.5-.9-9.7-.5-1 .1-2.1.4-2.9 1-.5.2-.7.7-.7 1.3v2c0 2.7-.2 5.5 0 8.2.2 4.6.5 9.2.6 13.7 0 .5.1 1 .2 1.4.2.4.4.7.7.9.9.3 1.8.6 2.7.6 1.7.2 3.3.2 5 .2h8.9c.8 0 1.6-.2 2.4-.4.7-.2 1.1-.9 1-1.6 0-.1-.1-.2-.1-.2-.1-.3-.2-.6-.5-1-.5-.8-1-1.5-1.6-2.2-1.2-1.8-2.5-3.4-3.9-5.3zm25.5-4.7c.3-.2.6-.4.8-.6 2.7-1.7 3.9-4.8 3-7.9-.9-3.7-3.3-5.6-7.1-5.6-1.5 0-3 0-4.5.1-2.1.2-4.1.5-6.2.8-.8.2-1.4.9-1.5 1.7v1c-.1 3.2.2 6.4.3 9.6.2 4 .3 7.9.5 11.8 0 .7.2 1.4.3 2.1.2.9 1 1.6 1.9 1.7.7.2 1.4.2 2.1.2 3-.2 6-.3 9-.6 1.7-.2 3.4-.7 4.8-1.7 1.8-1.2 2.8-3.2 2.7-5.3-.2-1.6-.6-3.1-1.5-4.4-.6-1-1.4-1.7-2.3-2.1-.8-.2-1.5-.5-2.3-.8z"
                      fill="#ff596f"
                      opacity=".99"
                    ></path>
                    <g fill="#1d184e">
                      <path d="M236.9 84.5c-.2-1.5-.4-2.9-.9-4.4l-.1-.3-1.9-.3c-1.4-.2-2.6-.4-3.9-.6-5.4-.9-10.6-2.3-15.8-4.1-6-2.1-11.9-4.6-17.6-6.9-6.8-2.7-13.5-5.8-19.9-9.2-9.5-5.3-18.7-11.5-27-18.6l-.6-.6c-.9-.7-1.7-1.4-2.6-2.1-.5-.3-1-.6-1.5-.6h-.4c-1.7 1-3.3 2.2-4.8 3.6-3.9 3.9-8.1 7.6-12.5 10.9-1 .7-1.8 1.4-2.8 2.1-2.2 1.7-4.5 3.5-7 4.9-5.4 3.2-11 6.1-16.8 8.7-7.1 3.2-14.6 5.9-21.8 8.5-1.4.5-2.6 1-4 1.4-4.4 1.6-9.1 3-13.8 3.5-.6.1-1.2.2-1.7.5-1 .5-1.5 1.5-1.3 2.5s1.1 1.7 2.1 1.7h.7c3.4-.2 6.8-.9 10-1.8 3.8-1.1 7.5-2.5 11.2-3.8 1.7-.6 3.3-1.2 5-1.8 10.3-3.7 20.4-8.2 30-13.6 4.5-2.6 9-5.7 13-9 3.3-2.5 6.5-5.2 9.5-8.1 1.3-1.4 2.6-2.6 3.9-3.9.6-.5 1-1 1.5-1.5l.1-.1c.6.6 1.3 1.1 2 1.7 1.7 1.5 3.4 3 5.2 4.4 7.2 6 15.2 11.2 23.4 15.5 12.2 6.4 24.9 11.4 35.8 15.5 5.6 2.1 11.5 3.7 17.4 4.7.8.2 1.7.2 2.5.4.3.1.6.1 1 .2.1.7.1 1.4.2 2.1.2 1.6.2 3.3.3 4.9.4 8.1.4 16.7.1 26.3-.2 5.7-.6 11.4-1 17.1-.2 1.9-.2 3.9-.4 5.8-.4 6-1 12-1.9 17.6-1 6.9-2.5 13.9-4.6 20.6-1.7 5.8-4.1 11.5-6.8 16.9-1.5 2.9-3.4 5.6-5.2 8.2-.6.8-1.1 1.5-1.6 2.3a92.9 92.9 0 0 1-15.2 16.7c-10.6 9.1-22.5 16.3-35.4 21.5-3.9 1.6-8 2.9-12.1 4.1l-1 .2c-1 .2-2.1.6-3 .8s-1.6.9-1.7 1.7c-.1.6 0 1.5.5 2.1.3.4.7.6 1.2.6s10.5-2.6 13.3-3.5c8.2-2.9 16.1-6.6 23.5-11 15.2-8.8 28.4-21.3 38-36.1 3.7-5.7 6.6-11.9 8.7-18.3 2.5-7 4.4-14.2 5.6-21.5 1-5.2 1.6-10.5 2.1-15.4.3-3.1.6-6.3.8-9.3l.2-2.5c.2-3.7.6-7.4.7-11 .2-5.2.3-10.6.3-15.8v-1c-.2-7.9-.2-15.8-1.2-23.5z"></path>
                      <path d="M153.3 203.3c10.7-1.8 20.4-8 26.6-16.9 6.4-8.6 9.1-19.5 7.3-30-1-6.7-3.7-12.9-8-18.2-.3-.4-.5-.9-.5-1.4 0-2.2-.1-4.4-.1-6.5l-.1-2.8h-.1v-2.1c0-2.1-.1-4.3-.2-6.5-.2-2.5-.5-5.1-.8-7.5l-.2-1.8c-.5-4.2-1.5-8.3-3.1-12.2-1.3-3.1-5.1-8-6.3-9.7-.2-.2-.3-.4-.3-.4-.5-1-8-7.7-14.1-8.7-4.1-1.3-8.6-1.7-14.2-1.2-1.1.1-2.3.3-3.4.6-4.2 1.3-8.1 3.6-11.3 6.7-.3.3-.6.6-1 .9-1.4.8-2.6 2-3.5 3.3-3.4 4.7-5.6 10.2-6.2 16-.4 2.9-.8 6-1 9-.3 5-.6 9.4-.7 13.4-.1 2.5 0 5.2 0 7.6v3.8c0 .6-.2 1.4-.6 1.9-6.6 9.2-9.1 19.5-7.1 30.3 1.4 8.7 5.8 16.8 12.5 22.6 8.1 7 17.3 10.6 27.6 10.6 2.9 0 5.8-.2 8.8-.8zm-22.9-79.8c0-.5.1-1 .1-1.4.1-.9.1-1.7.2-2.6.1-2.2.2-4.6.4-6.9.2-2.6.3-4.8.7-7.1.5-3.2 2.4-5.7 5.8-7.9 1.4-1 2.9-1.5 4.5-1.7h.9c.7 0 1.4 0 2.1.1 1.3.1 2.5.2 3.8.6 3.5.7 6.5 2.8 8.4 5.7.1.2.2.3.3.5 1.5 1.6 2 3.7 2.5 5.8l.2.6c.7 3.5 1.1 7 1.1 10.6.1 1.4.1 2.9.2 4.4v1.4c-2.9-1.3-6-2.1-9.2-2.5-2.8-.4-5.6-.5-8.4-.2-4.4.3-8.7 1.4-12.9 3.1-.2.1-.5.2-.7.2-.1-.9 0-1.8 0-2.7zm36.8 5l-.2-.1c-.3-.1-.6-.2-.9-.6-.2-.3-.3-.7-.2-1v-.1c0-4.3-.2-8.7-.8-12.9-.1-.6-.1-1.2-.2-1.8-.1-1.3-.2-2.5-.5-3.8-.8-4-2.6-7.7-5.4-10.6-2.8-3.1-6.6-5-10.7-5.5-1.4-.2-2.7-.3-4.5-.5s-3.7.1-5.3.8c-3.6 1.4-6.6 3.7-8.8 6.8-1.3 1.7-2.1 3.9-2.4 6-.4 2.2-.6 4.5-.7 6.8-.2 4.4-.4 8.9-.5 13.2l-.1 2.9c0 .2-.2.5-.4.6-2.3 1.2-4.4 2.6-6.4 4.3-.6.6-1.3 1.1-1.9 1.7-.3.3-.6.6-1 .9 0-.2 0-.2.1-.4v-.2-2.8c0-2 0-4.1.1-6.1.2-3.7.4-7.1.7-10.5.3-3.9.8-7.7 1.2-10.6.1-.5.1-.9.2-1.4.2-1.9.5-3.9 1.1-5.7 1.2-3.3 3.2-6.3 5.6-8.7 1.7-1.8 3.8-3.4 6-4.6 3.3-1.8 7-2.9 10.7-3 .7 0 1.4-.1 2.1-.1 2.6 0 5.2.3 7.7.9 5 1.3 8.9 3.3 11.8 6.3l.6.6c3.2 2.5 4.8 5.9 6.4 9.5 1.5 3.8 2.5 7.7 2.9 11.8l.2 1.3c.2 1.9.5 3.9.7 5.9.2 1.6.2 3.3.2 5.3.1 3.4.1 6.9.1 10.3-1.8-1.3-6.7-4.5-7.5-4.9zm-41.5 5.1c4.6-3.2 10.1-5.1 16.8-5.9 1-.2 2.1-.2 3-.2.3 0 .7 0 1-.1 11 .2 19.7 3.7 26.6 10.8 5.1 5.1 8.5 11.9 9.5 19.1 1.7 12.2-2 22.8-11 31.7-5.7 5.6-12.9 9.1-20.7 10.3-2.1.4-4.1.6-6.2.6-13.7 0-26.6-7.9-32.6-20.6-2.9-5.9-3.9-12.5-3-19 1.4-11.1 7-20.1 16.6-26.7z"></path>
                    </g>
                  </svg>
                </span>
                <div>
                  <div className="trust-signal-heading">Secure Payments</div>
                  <div className="trust-signal-text">
                    100% Secure payment with 256-bit SSL Encryption
                  </div>
                  <div className="trust-signal-support">
                    <a
                      className="trust-signal-support-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="trust-signal">
                <span className="trust-signal-icon">
                  <svg
                    viewBox="0 0 293.4 287.8"
                  >
                    <path
                      d="M.6 132.8v-7.9c.1-.4.2-.7.2-1.1.1-1.8.1-3.5.3-5.2.5-4.2 1-8.4 1.6-12.6.6-4.8 1.6-9.6 2.9-14.3 1.7-6 4.1-11.7 7.1-17.1 1.7-3 3.4-6 5.2-9 2.7-4.8 5.7-9.3 9-13.6 3.9-4.8 8.4-9.1 13.3-12.8s10-7.1 15.2-10.5c7-4.4 14.3-8.1 22-11.2 2.4-1 4.9-1.9 7.3-2.8 3-1.1 6.1-2.1 9.2-3.1s6.2-1.9 9.3-2.7c3.4-.9 6.9-1.8 10.3-2.6 2.2-.5 4.3-1 6.5-1.4 2.7-.5 5.4-1 8.2-1.4 3.6-.5 7.1-1 10.7-1.5 3.3-.4 6.6-.8 9.9-1.1 4.2-.3 8.4-.7 12.6-.8 3.1-.1 6.3.3 9.4.4 4.2.1 8.4.5 12.7 1 4.4.6 8.8 1.6 13 2.9 3.4 1 6.6 2.2 9.9 3.5 2.5 1 5 2.2 7.4 3.4 2.6 1.4 5.1 2.9 7.6 4.5 3 1.9 5.9 3.8 8.8 6 3.8 2.9 7.6 5.8 11.2 8.9 3.2 2.7 6.2 5.6 9.1 8.5 3.6 3.6 7 7.4 10.4 11.2 4.8 5.2 9.2 10.8 13.1 16.7 2.4 3.5 4.5 7.2 6.3 11.1 1.2 2.6 2.4 5.3 3.4 7.9 1.2 3 2.4 6 3.3 9.1 1.5 4.6 2.7 9.3 3.7 14.1.5 2.6 1.1 5.3 1.6 7.9.7 3.7 1.2 7.4 1.3 11.1.4 8.9-.1 17.9-1.7 26.7-.9 5.6-2.2 11.2-4 16.6-1.7 4.9-3.5 9.8-5.2 14.7-3.1 8.6-5.7 17.3-9.5 25.6-1.7 3.6-3.4 7.3-5.4 10.8-2.2 3.9-4.6 7.6-7.3 11.2-4.6 6.5-10.1 12.4-16.3 17.4-5.9 4.6-11.8 9.2-17.8 13.7-3.2 2.4-6.7 4.4-10.1 6.5-4.3 2.5-8.8 4.7-13.4 6.5-2.3.9-4.6 1.9-7 2.7-3.4 1.1-6.9 2-10.4 2.7-2 .4-4 .9-6.1 1.3-2.5.5-5 .7-7.5 1.2-6.7 1.2-13.4 1.9-20.2 2.1-6.8.3-13.7.1-20.5-.4-5.3-.4-10.7-1-15.9-2-7.7-1.4-15.2-3.8-22.3-7.2-9.4-4.7-18.4-9.9-27.2-15.7-5-3.4-9.7-7.4-13.9-11.8-3.6-3.7-7.3-7.3-10.8-11-2.3-2.4-4.6-4.8-6.8-7.4-1.9-2.2-3.6-4.6-5.5-6.9-3.8-4.4-7.1-9.2-10.1-14.2-2.5-4.2-4.8-8.5-6.8-13-1.1-2.6-2.1-5.1-3.1-7.7-.6-1.6-1.2-3.3-1.7-5-.7-2.5-1.2-4.9-1.8-7.4-.6-2.8-1.3-5.5-1.7-8.3-.6-4.1-1.2-8.3-1.6-12.5s-.7-8.5-.9-12.8c-.2-3.7-.4-7.4-.6-11 .3-.4.2-.6.1-.9z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M220.3 226.3c-18.1-5.6-36-12-53.5-19.3-.8-.3-1.5-.7-2.3-.9-.2-.1-.4-.2-.8-.3-1.1-.4-2.1-.9-3.1-1.4-.1.2-.3.3-.3.5-1.3 1.7-2.8 3.1-4.3 4.3 12.3 4 24.4 8.5 36.3 13.7 7.6 3.3 15.3 8 23.3 10 5.1 1.3 10.4 1.7 15.6 2.4-2.1-4.2-5.9-7.5-10.9-9z"
                      fill="#d6dadf"
                    ></path>
                    <path
                      d="M188.9 234.9c-16.1-7.1-32.7-12.9-49.5-17.8-.7-.2-1.2-.4-1.7-.8-1.2.1-2.3.1-3.6.1-10.6-.3-21.4 5.3-31.7 0-2.3-1.3-4.3-2.8-5.6-4.8-.8 8.9 4.4 16 12.9 19.3 5.8 2.3 12.3 3.3 18.5 3.5 2.3.1 4.7-.1 7.1-.4 1.3-.2 2.6-.3 3.9-.5.8.5 1.8 1 2.7 1.4 3.6 1.8 7.3 3.2 10.9 4.8 6.3 2.7 12.7 5.3 19.1 7.7 11.3 4.3 43.6 18.1 55.2 21.8 7.3-4.9 13.8-9.3 17-14.9-6-.9-47.8-16.2-55.2-19.4z"
                      fill="#5dd4f6"
                    ></path>
                    <path
                      d="M287.1 196l-11.3-4.4c-5.8-2.3-11.7-4.6-17.5-6.9-4.5-1.8-8.9-3.7-13.4-5.5-6.4-2.6-12.8-5.1-19.3-7.6-8.5-3.3-17-6.7-25.5-10-7.2-2.8-14.3-5.6-21.5-8.4-.6-.3-1.1-.8-1.4-1.4-2.2-3.8-5-7.4-8.4-10.4-4.3-3.8-7.4-7.9-8.5-13.4-.8-4.4-.6-8.9.8-13.3.9-3 2-5.9 2.6-9 1.8-8.2-3.7-13.4-9.8-14.7-5.2-1.1-9.6 1.1-13.3 4.2-2.5 2.1-4.6 4.5-6.4 7.2-2.1 4.3-2.8 6.3-3.3 8.8-.6 4.8-.2 8 .8 12.7.9 4.6 2.9 8.9 5.8 12.7.3.4.4.9.6 1.4l.3.4-.6-.2c-1-.7-2.1-1.3-3.3-1.8-6.9-3.2-14.6-4.5-22.3-3.8-3.5.3-6.9 1.3-10 2.8s-5.8 3.8-7.8 6.3c-1.9 2.3-3.2 5-3.7 7.8s-.3 5.8.7 8.5c.2.6.3 1.3.5 1.8-8.9 3.4-12 15.8-3.1 23.7-2.3 1.8-2.6 4.4-2.6 6.9-.1 4.9 3.3 9.1 7.6 12.3-1.3.8-1.1 2.4-1.1 3.5 0 2.8 1 6 2.7 8.3 2.8 3.3 6.8 5.8 11.2 7 4.8 1.4 9.8 1.5 14.3-.8 1.6-.8 3-1.2 4.7-.4.5.2 1.1.3 1.6.3 7.6.4 15.1.4 21.3-4.8 5.7 2 11.2 3.8 16.6 5.9 7.5 2.8 15 5.7 22.5 8.5 6.8 2.6 13.5 5.1 20.3 7.5 2.3.8 4.8 1.6 7.1 2.5 4.8 1.8 9.5 3.5 14.2 5.2 2.3.8 18.6 7.4 21 8.3 14.1-9.1 35.1-47.7 36.9-57.7zm-184.3-55.3c5.1-3.4 10.8-4 16.9-3.6 1.9 0 3.8.2 5.7.5 1.5.4 3 1 4.4 1.8 1.5.8 3 1.6 4.5 2.3 2 1 2.3 1.6 1.3 3.4-2.8 5.1-4.3 10.8-4.2 16.4-.5-.1-1-.3-1.5-.5-4.1-2.2-8.9-2.3-13.3-3.5-.5-.1-1.1-.1-1.6 0s-1 .3-1.4.6c-.5.4-.5 1.8-.3 2.5.2.3.4.6.7.8.3.3.7.4 1 .5 3.3.8 6.8 1.2 10.1 2.1 1.4.3 2.8.9 3.9 1.8 1.2.8 2.2 1.8 2.8 3 2 3.5-.4 7.8-4.8 8.8-1.8.3-3.6.3-5.3 0-3.7-.8-7.5-1.7-10.8-3.3-3.9-2-7.3-4.8-9.8-8.2-2.3-3.1-4-6.6-5-10.3-1.8-5.2 1.5-11.6 6.7-15.1zm-14.4 28.6c.3-1.8 2.8-3.8 4.8-4.2 1.3-.2 1.7.6 2.1 1.3 3 5.2 7.7 9.3 13.3 12 5.2 2.6 12.4 5 19.4 4.1.4.4.9 1 1.3 1.4 2.5 3.3 1.6 5.9-2.8 6.8-4.7.9-9.5.9-14.2 0-7.8-1.6-14.2-5.5-20-10.3-3.8-2.9-4.6-6.8-3.9-11.1zm24.3 48.7c-9.3-.6-14.4-4.8-15.3-12.3 9 4.3 18.1 7.6 28.1 3.4-.3 4.3-7.1 9.3-12.8 8.9zm12.1-14.1c-4.2 2.7-8.6 2.9-13.3 2-5.3-1-10.3-3.1-14.6-6-3.7-2.5-6.6-5.7-6.3-10.3.2-1.3.5-2.5.8-3.8 11 9.1 24.8 11.8 35.1 10 2.3 3.1 1.6 6-1.7 8.1zm47.9-40.6c-2.3 4.7-4.2 9.5-6.2 14.3-2.7 6.2-5.4 12.4-8.2 18.6-1.1 2.4-2 4.8-3.1 7.3-1.1 2.8-3.1 5.3-5.8 7.1-3.4 2.2-6.7 4.6-10.9 5.3-3.5.6-7.1 1-10.8-.1 1-1.9 2.9-3.3 2.8-5.7-.3-2.5.3-5.1 1.7-7.3 1.2-1.8.7-4.1-.1-6.2-.3-.8-.6-1.8-.8-2.6 4.4-3.3 6.7-6.3 1-13.4l3.7-3c.4.6 1 1.2 1.6 1.6.7.4 1.8.8 2.4.5.3-.3.6-.6.8-.9s.3-.8.3-1.2c-.1-1.3-.5-2.5-1.1-3.6-2.1-3.9-3.3-8.3-3.4-12.7-.2-3.5.4-7.1 1.7-10.4 1.3-3.6 3.3-6.9 6-9.8 1.1-1.3 1-2.1 0-3.3-1.7-2-3.1-4.1-4.4-6.3-4.2-7-4.9-14.6-3.5-22.3.3-1.4 1-2.7 1.9-3.8 2.2-2.8 4.3-5.7 7.3-7.7 1.2-.8 2.5-1.3 3.9-1.6s2.8-.2 4.3.1c1.3.3 2.4.9 3.3 1.8.9.8 1.5 2 1.7 3.2.8 3-.3 5.8-1.3 8.7-1.5 4.6-3.1 9.2-2.8 14.1.3 5.1 1.4 10.1 4.5 14.4 1.7 2.3 4.1 4.1 6 6.2 2.5 2.8 5.3 5.4 7.2 8.5 1 1.6 1.7 3.3 1.8 5.2-.2 1.5-.6 3.4-1.5 5z"
                      fill="#1f194e"
                    ></path>
                    <g fill="#a6e8a1">
                      <path d="M202.9 57.9c-1.4-.5-3.1-.2-4.5.9l-5.5 4.7c-1.3 1.1-2.5 2.1-3.8 3.2-3.1 2.6-6.3 5.3-9.4 8.1-1.8 1.8-3.6 3.6-5.3 5.4-.3.3-.7.8-.9 1.3s-.3 1.1-.3 1.7.1 1.1.3 1.7c.3.5.5.9.9 1.3 1 1 2.8 1.3 4.3.9.8-.2 1.6-.6 2.2-1.1s1.2-1.1 1.7-1.7c.3-.3.7-.8 1.1-1.1.8-.7 1.4-1.4 2.2-2.1 2.3-2.2 4.8-4.5 7.2-6.7 1.8-1.7 3.8-3.3 5.8-4.9 1.7-1.4 3.4-2.8 5.1-4.3V65c.7-.8 1.3-1.6 1.6-2.5l.3-.6-.1-.6c-.4-1.6-1.4-2.9-2.9-3.4zM168.2 52.6c.4-1.8.8-3.4 1.3-5.2.3-1.3.2-2.5-.5-3.3-.4-.6-1.2-1.3-2.6-1.6-.5-.1-1.1-.1-1.6 0s-1 .3-1.5.7-.8.7-1.2 1.2c-.3.4-.5.8-.6 1.3-1 3.1-2.1 6.3-2.9 9.5-1.2 4.3-2.3 8.5-3.3 12.7-.4 1.7-.8 3.3-1.1 5-.5 3.2.8 4.2 1 4.3.6.5 1.4 1.1 2.5 1.3.5.1 1.1.1 1.6 0h.2c.5-.1.9-.3 1.3-.6.5-.3.8-.7 1.2-1.1.3-.4.5-.8.6-1.3.6-1.7 1.1-3.5 1.6-5.5.5-2.1.9-4.2 1.4-6.3.5-2.2.9-4.3 1.5-6.4.4-1.6.8-3.2 1.1-4.7zM139.3 67.5c-1.3-3.7-2.8-7.4-4.4-11.1-.3-.5-.4-1.1-.7-1.8-.8-2.2-1.8-4.7-4.4-6.4l-.3-.3c-.5-.4-2.2-1.6-3.9-.3-.6.4-1 .8-1.3 1.4s-.6 1.2-.7 1.8v.6c.2 1.3.6 2.7 1.2 3.8l1.1 2.6c.9 2.2 1.8 4.3 2.7 6.5.4 1.1.8 2.3 1.3 3.3.7 1.8 1.3 3.5 2.1 5.3.8 1.4 1.7 2.7 2.9 3.8l.2.1c.6.4 1.3.7 1.9.8s1.2.1 1.8-.1c.1 0 .3-.1.3-.1l.3-.1c1.3-.7 1.9-2.3 1.9-3.6v-.3c0-.3-.6-2.8-.6-2.8-.6-.8-1-2-1.4-3.1z"></path>
                    </g>
                    <path
                      d="M285.9 200.2c-39.8-16.3-95.3-38-101-39.1-1.1-.4-5.2-2-5.5-.6-2.4 10.4-23.5 53.4-23.5 53.4 10.1 4 22.4 8.2 32.7 11.4 1.3.7 39.1 15.3 66.1 25.5 4.6-2.7 26.1-32.8 31.2-50.6z"
                      fill="#ff596f"
                    ></path>
                  </svg>
                </span>
                <div>
                  <div className="trust-signal-heading">Super Service</div>
                  <div className="trust-signal-text">
                    Hassle-free returns and friendly customer support
                  </div>
                  <div className="trust-signal-support">
                    <a
                      className="trust-signal-support-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Top>
          <Bottom>
            <Title>Clothing</Title>
            <Sub>
              T-shirts, hoodies, tops, dresses, skirts, hats, and more in a huge
              range of styles, colors, and sizes (XS - plus size). Whether you
              wear women's clothing or men's clothing you’ll find the original
              artwork that’s perfect for you. Every purchase supports the
              independent artist who designed it, and that’s pretty cool.
            </Sub>
          </Bottom>
        </Main>
      </Container>
    );
}

export default Details
const Container = styled.div`
  background: #f5f5f5;
  padding: 2em 0;
`;
const Main = styled.div`
  width: 70%;
  margin: auto;
  @media (max-width: 1024px){
      width: 97%
  }
  svg {
    width: 100px;
  }
  .shipping {
    text-align: center;
    display: flex;
    justify-content: space-around;
    background: #fff;
    margin: auto;
    padding: 2em 1em;
    margin-bottom: 2em;
      @media (max-width: 1024px){
          flex-direction: column;
      }

  }
  .trust-signal-heading {
    font-weight: bold;
    font-size: 20px;
  }
  .trust-signal-text {
    font-weight: 500;
    font-size: 17px;
  }
  a {
    text-decoration: none;
    color: black;
    margin: 1em 0;
  }
`;
const Top = styled.div``;
const Bottom = styled.div`
    padding: 1em 0;
    width: 60%;
    margin: auto;
`;
const Title = styled.div`
      font-weight: bold;
      font-size: 25px;
`;
const Sub = styled.div`

`;
