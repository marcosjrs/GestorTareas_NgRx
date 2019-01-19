export class Todo {

  public id: number;
  public completado: boolean;
  public texto: string;

  constructor(texto: string) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1); //primera en mayusc
    this.completado = false;
    this.id = Math.random(); //esto sería generado por la BBDD
  }
}
