import React from 'react';
import './App.css';
import {NavDropdown } from 'react-bootstrap';


function tambahTugas() {
  return (
    <div className="app-container">
      <nav className="navigation-bar">
        <ul>
        </ul>
      </nav>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content-box text-left">
                <h3>Nama tugas</h3>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nama Tugas" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="content-box text-left">
                <h3>Nama Materi</h3>
                <form>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Masukkan Soal" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Masukkan Jawaban" />
                      </div>
                    </div>
                  </div>
                  <div className="button-row">
                    <button className="btn btn-secondary">Tambah Jawaban</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <button className="dropdown-button">Tambah Soal</button>
                <div className="dropdown-content">
                  <a href="#">Multiple Choice</a>
                  <a href="#">True or False</a>
                  <a href="#">Check Box</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="button-row">
                <button className="btn btn-secondary">Simpan</button>
                <button className="btn btn-secondary">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tambahTugas;