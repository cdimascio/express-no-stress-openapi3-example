import ExamplesService from '../../services/examples.service';

export class Controller {
  all(req, res) {
    console.log('calling all');
    ExamplesService.all().then(r => res.json(r));
  }

  byId(req, res) {
    console.log('calling byID');
    ExamplesService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    console.log('calling create');
    ExamplesService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/examples/${r.id}`)
        .json(r)
    );
  }
}
export default new Controller();
