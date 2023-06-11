import React from 'react';
import './App.css';

function App() {
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
                <h3>Mata pelajaran</h3>
                <div className="dropdown">
                  <button className="dropdown-button">Options</button>
                  <div className="dropdown-content">
                    <a href="#">Kuantitatif</a>
                    <a href="#">Literasi bahasa Inggris</a>
                    <a href="#">Literasi Bahasa Indonesia</a>
                    <a href="#">Penalaran Matematika</a>
                    <a href="#">Penalaran umum</a>
                    <a href="#">Kepampuan Memahami Bacaan dan Menulis</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content-box text-left">
                <h3>Nama Materi</h3>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Masukkan Nama Materi" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="content-box text-left">
                <h3>Video</h3>
                <div className="dropdown">
                  <button className="dropdown-button">Add Video</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="button-row">
                <button className="btn btn-secondary">Simpan</button>
                <button className="btn btn-secondary">Batalkan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;