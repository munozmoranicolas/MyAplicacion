import { Injectable } from '@angular/core';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { SQLiteService } from './sqlite.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DBTaskService {

  public userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private loadToVersion = 1;
  private databaseName: string = "";
  private db!: SQLiteDBConnection;
  private isUserReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqliteService : SQLiteService) {}

  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;
    // create upgrade statements
    await this.sqliteService.addUpgradeStatement({ database: this.databaseName}).then(() => {});
    // create and/or open the database
    this.db = await this.sqliteService.openDatabase(this.databaseName, false, 'no-encryption', this.loadToVersion, false);

    await this.getUsers();
  }
  userState() {
    return this.isUserReady.asObservable();
  }

  fetchUsers(): Observable<User[]> {
    return this.userList.asObservable();
  }

  async loadUsers() {
    const users: User[]= (await this.db.query('SELECT * FROM users;')).values as User[];
    this.userList.next(users);
  }
  async getUsers() {
    await this.loadUsers();
    this.isUserReady.next(true);
  }
  async addUser(name: string) {
    const sql = `INSERT INTO users (name) VALUES (?);`;
    await this.db.run(sql,[name]);
    await this.getUsers();
  }

  async updateUserById(id: string, active: number) {
    const sql = `UPDATE users SET active=${active} WHERE id=${id}`;
    await this.db.run(sql);
    await this.getUsers();
  }
  async deleteUserById(id: string) {
    const sql = `DELETE FROM users WHERE id=${id}`;
    await this.db.run(sql);
    await this.getUsers();
  }
  
}
