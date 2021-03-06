export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateurx',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for(const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }
  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    // this.emitAppareilSubject();
  }
}
