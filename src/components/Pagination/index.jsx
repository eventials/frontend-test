import React, { Component } from "react";
import TableCountry from "../../components/TableCountry";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import api from "../../api/api";
import { confirmAlert } from "react-confirm-alert";

import { Container } from "./styles";
import "react-confirm-alert/src/react-confirm-alert.css";
import Main from "../../pages/Main";
// icons
import {
  MdDelete,
  MdEdit,
  MdChevronLeft,
  MdChevronRight
} from "react-icons/md";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageActive: 1,
      countriesTable: [],
      pagesMax: 0,
      modalOpen: false,
      updatePopulation: false
    };
    this.loadCountriesToTable = this.loadCountriesToTable.bind(this);
    this.notify = this.notify.bind(this);
    this.handlePageActive = this.handlePageActive.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  notify(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  handleModal = async (id, name, title, message) => {
    this.setState({ modalOpen: true });
    confirmAlert({
      title: `${title} ?`,
      message: `Você deseja ${message}: ${name}?`,
      buttons: [
        {
          label: "Sim",
          onClick: () =>
            message === "editar" ? this.handleUpdate(id) : this.handleDelete(id)
        },
        {
          label: "Não",
          onClick: () => this.setState({ modalOpen: false })
        }
      ]
    });
  };

  handleUpdate(id) {
    this.props.history.push("/editCountry", { id });
  }
  handleDelete = async id => {
    try {
      await api.delete(`/countries/${id}`);

      this.loadCountriesToTable();
      this.props.handleClick();
    } catch (error) {
      this.notify("Falha ao carregar paísesasdfasdfasdf, atualize a página!");
    }
  };

  handlePageActive = async page => {
    if (page > 0 && page <= 26) {
      try {
        const response = await api.get(
          `/countries?_sort=population&_order=desc&_page=${page}&_limit=8`
        );

        this.setState({ countriesTable: response.data, pageActive: page });
      } catch (error) {
        this.notify("Falha ao carregar tabela, atualize a página!");
      }
    }
  };

  loadCountriesToTable = async () => {
    try {
      const response = await api.get(
        `/countries?_sort=population&_order=desc&_page=${this.state.activePage}&_limit=8`
      );

      this.setState({ countriesTable: response.data });
    } catch (error) {
      this.notify("Falha ao carregar tabela, atualize a página!");
    }
  };

  countCountries = async () => {
    try {
      const response = await api.get(`/countries`);

      this.setState({ pagesMax: Math.round(response.data.length / 8) });
    } catch (error) {
      this.notify("Falha ao carregar tabela, atualize a página!");
    }
  };

  componentDidMount() {
    this.countCountries();
    this.loadCountriesToTable();
  }

  componentDidUpdate() {
    if (this.props.update) {
      this.props.updateState();
      this.loadCountriesToTable();
    }
  }

  render() {
    return (
      <>
        <TableCountry>
          {this.state.countriesTable.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong>
              <span>{c.population.toLocaleString()}</span>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    this.handleModal(c.id, c.name, "Excluir", "excluir")
                  }
                >
                  <MdDelete size={18} color="#F46357" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    this.handleModal(c.id, c.name, "Editar", "editar")
                  }
                >
                  <MdEdit size={18} color="#F46357" />
                </button>
              </div>
            </li>
          ))}
        </TableCountry>

        <Container>
          <button
            type="button"
            onClick={() => this.handlePageActive(this.state.pageActive - 1)}
          >
            <MdChevronLeft size={36} color="#fff" />
          </button>

          <button
            type="button"
            onClick={() => this.handlePageActive(this.state.pageActive + 1)}
          >
            <MdChevronRight size={36} color="#fff" />
          </button>
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        {/* Same as */}
      </>
    );
  }
}
export default withRouter(Pagination);
