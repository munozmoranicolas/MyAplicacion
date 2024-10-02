import { Injectable } from '@angular/core';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { SQLiteService } from './sqlite.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})
export class DBTaskService {

  private databaseName: string = "";
  private db!: SQLiteDBConnection;
  private loadToVersion = 1;
  private isUserReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite : SQLiteService) { }

  async initializeDatabase(dbName: string) {
    this.databaseName = dbName;
    // create upgrade statements
    await this.sqlite.addUpgradeStatement({  database: this.databaseName});
    // create and/or open the database
    this.db = await this.sqlite.openDatabase(this.databaseName, false, 'no-encryption', this.loadToVersion, false);

    //await this.getUsers();
  }

   // CRUD Operations
   async getUsers() {
    await this.loadUsers();
    this.isUserReady.next(true);
  }

  async loadUsers() {
    const users: User[]= (await this.db.query('SELECT * FROM sesion_data;')).values as User[];
    console.log(users);
  }
  
}
