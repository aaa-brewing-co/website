import React from "react";

export default function Legend() {
  return (
    <div className="legend mb-5">
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">LEGEND</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>$</th>
            <td>$0 - $15</td>
          </tr>
          <tr>
            <th>$$</th>
            <td>$16 - $30</td>
          </tr>
          <tr>
            <th>$$$</th>
            <td>$31 - $50</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};
