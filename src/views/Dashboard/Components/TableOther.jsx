import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader, Progress } from "reactstrap";

class TableOther extends Component {
  state = {};
  render() {
    const dataOther = [
      {
        id: 1,
        provider: "Channel Drama Korea",
        title: "Lawan Penyebaran COVID-19 dengan Inovasi",
        timeChallenge: "March - 13 April 2020",
        website: "Telegram: @Drakor",
      },
      {
        id: 2,
        provider: "Streaming Radio Online Indonesia",
        title: "Indosat Ooredoo Digital Camp",
        timeChallenge: "30 Maret - May 2020",
        website: "deltafm.net/streaming",
      },
      {
        id: 3,
        provider: "Berbenah Rumah ala Marie Kondo Ways",
        title: "Digital Talent Scholarship 2020",
        timeChallenge: "30 Maret - 13 April 2020",
        website: "konmari.com",
      },
    ];
    return (
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>Judul</th>
            {/*<th className="text-center">Judul</th>
            <th>Waktu</th>*/}
            <th className="text-center">Website</th>
          </tr>
        </thead>
        <tbody>
          {dataOther.map((item, index) => (
            <tr key={item.id}>
              <td>{item.provider}</td>
              {/*<td className="text-center">{item.title}</td>
              <td>
                <small className="text-muted">{item.timeChallenge}</small>
          </td>*/}
              <td className="text-center text-muted">{item.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TableOther;
