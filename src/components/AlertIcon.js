import React from 'react';

const AlertIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-alert-circle"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ff2825"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ paddingRight: "5px" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export default AlertIcon;
