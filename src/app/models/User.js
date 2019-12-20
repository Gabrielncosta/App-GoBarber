import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init( //chamando o método init da classe Model
      {
        name: Sequelize.STRING, //colunas que estarão dentro da base de dados
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', () => {
      
    });
  }
}
// utilizado para manipular os dados de usuário (criar, deletar, editar...)
export default User;