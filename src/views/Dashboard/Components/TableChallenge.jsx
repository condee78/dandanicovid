import React, { Component } from "react";
import { Table } from "reactstrap";

class TableChallenge extends Component {
  state = {};
  render() {
    const dataChallenge = [
      {
        id: 1,
        provider: "Dicoding",
        title: "Lawan Penyebaran COVID-19 dengan Inovasi",
        timeChallenge: "March - 13 April 2020",
        website: "dicoding.com/challenges/580",
      },
      {
        id: 2,
        provider: "Indosat Ooredoo",
        title: "Indosat Ooredoo Digital Camp",
        timeChallenge: "30 Maret - May 2020",
        website: "idcamp.indosatooredoo.com",
      },
      {
        id: 3,
        provider: "MotoGP",
        title: "MotoGP Virtual Race",
        timeChallenge: "12 April 2020",
        website: "motogp.com",
      },
    ];
    return (
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>Penyelenggara</th>
            <th className="text-center">Judul</th>
            <th>Waktu</th>
            <th className="text-center">Kontak</th>
          </tr>
        </thead>
        <tbody>
          {dataChallenge.map((item, index) => (
            <tr key={item.id}>
              <td>{item.provider}</td>
              <td className="text-center">{item.title}</td>
              <td>
                <small className="text-muted">{item.timeChallenge}</small>
              </td>
              <td className="text-center text-muted">{item.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default TableChallenge;
