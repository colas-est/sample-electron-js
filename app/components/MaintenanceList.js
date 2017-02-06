// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

class MaintenanceList extends Component {
  props: {
  }

  render() {
    const props = this.props
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            Trie et recherche
          </div>
          <div className="panel-body">
            Recherche
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Maintenance à réaliser prochainement</h4>
          </div>
          <table className="table table-default table-striped table-hover">
            <thead>
              <tr>
                <th>Organe principal</th>
                <th>Organe secondaire</th>
                <th>Elément principal</th>
                <th>Elément secondaire</th>
                <th>Opération</th>
                <th>A faire depuis</th>
                <th>Périodicité</th>
                <th>Détails</th>
                <th>Remarque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="warning">
                <td>Contrôles réglementaires</td>
                <td>Dispositif de collecte des eaux</td>
                <td>Séparateur d'hydrocarbures</td>
                <td>Vannes</td>
                <td>Contrôler les vannes</td>
                <td>4 jours</td>
                <td>1 an</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
              <tr className="warning">
                <td>Tambour sêcheur</td>
                <td>Galets</td>
                <td>Extracteurs</td>
                <td>Galet</td>
                <td>Vérifier l'usure et rerégler</td>
                <td>10 jours</td>
                <td>2 ans</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
              <tr className="warning">
                <td>Prédoseurs</td>
                <td>Prédoseur AE</td>
                <td>Extracteurs</td>
                <td>Moto-réducteur</td>
                <td>Contrôler le niveau d'huile</td>
                <td>10 jours</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
              <tr>
                <td>Bandes transporteuses</td>
                <td>Tapis collecteur</td>
                <td>Rouleau entraineur</td>
                <td>2 roulements</td>
                <td>Graisser les roulements</td>
                <td>30 jours</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
              <tr>
                <td>Bandes transporteuses</td>
                <td>Tapis collecteur</td>
                <td>Rouleau du bas</td>
                <td>2 roulements</td>
                <td>Graisser les roulements</td>
                <td>12 jours</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
              <tr>
                <td>Tour</td>
                <td>Malaxeur</td>
                <td>Tôles du fond</td>
                <td>Tôles du fond</td>
                <td>Changer les tôles du fond</td>
                <td>20 jours</td>
                <td>4 ans</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait en avance</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Maintenance en cours</h4>
          </div>
          <table className="table table-default table-striped table-hover">
            <thead>
              <tr>
                <th>Organe principal</th>
                <th>Organe secondaire</th>
                <th>Elément principal</th>
                <th>Elément secondaire</th>
                <th>Opération</th>
                <th>A faire depuis</th>
                <th>Périodicité</th>
                <th>Détails</th>
                <th>Remarque</th>
              </tr>
            </thead>
            <tbody>
              <tr className="warning">
                <td>Contrôles réglementaires</td>
                <td>Dispositif de collecte des eaux</td>
                <td>Séparateur d'hydrocarbures</td>
                <td>Vannes</td>
                <td>Contrôler les vannes</td>
                <td>4 jours</td>
                <td>1 an</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
              <tr>
                <td>Tambour sêcheur</td>
                <td>Galets</td>
                <td>Extracteurs</td>
                <td>Galet</td>
                <td>Vérifier l'usure et rerégler</td>
                <td>Aujourd'hui</td>
                <td>2 ans</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
              <tr className="warning">
                <td>Prédoseurs</td>
                <td>Prédoseur AE</td>
                <td>Extracteurs</td>
                <td>Moto-réducteur</td>
                <td>Contrôler le niveau d'huile</td>
                <td>10 jours</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
              <tr className="danger">
                <td>Bandes transporteuses</td>
                <td>Tapis collecteur</td>
                <td>Rouleau entraineur</td>
                <td>2 roulements</td>
                <td>Graisser les roulements</td>
                <td>30 jours</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
              <tr>
                <td>Bandes transporteuses</td>
                <td>Tapis collecteur</td>
                <td>Rouleau du bas</td>
                <td>2 roulements</td>
                <td>Graisser les roulements</td>
                <td>Aujourd'hui</td>
                <td>6 mois</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
              <tr>
                <td>Tour</td>
                <td>Malaxeur</td>
                <td>Tôles du fond</td>
                <td>Tôles du fond</td>
                <td>Changer les tôles du fond</td>
                <td>Aujourd'hui</td>
                <td>4 ans</td>
                <td><button className="btn btn-xs btn-default" data-toggle="modal" data-target="#myModal">
                  Détails
                </button></td>
                <td><a className="btn btn-xs btn-success" href="">Fait</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Détails de la maintenance</h4>
              </div>
              <div className="modal-body">
                bla bla bla
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Fermer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MaintenanceList;
