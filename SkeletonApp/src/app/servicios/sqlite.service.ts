import { Injectable } from '@angular/core';
import { CapacitorSQLite, CapacitorSQLitePlugin, capSQLiteUpgradeOptions, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private db : SQLiteDBConnection | null = null;
  
  constructor() {}

  async initDB(): Promise<void> {
    try{
      if(Capacitor.isNativePlatform()){
        const sqlite = CapacitorSQLite;
        this.db = await sqlite.createConnection({database: 'test', version: 1, encrypted: false, mode: 'no-encryption'});
        await this.db.open();
        console.log('initDB: Database opened');
      }
    } catch(err: any) {
      return Promise.reject(`initDB: ${err}`);
    }
  }
  /*conexionSQLite!: SQLiteConnection;
  estadoServicio: boolean = false;
  platforma!: string;
  sqlitePlugin!: CapacitorSQLitePlugin;
  native: boolean = false;

  constructor() {}
  async initializarPlugin(): Promise<boolean> {
        this.platforma = Capacitor.getPlatform();
        if(this.platforma === 'ios' || this.platforma === 'android') this.native = true;
        this.sqlitePlugin = CapacitorSQLite;
        this.conexionSQLite = new SQLiteConnection(this.sqlitePlugin);
        this.estadoServicio = true;
        return true;
  }

  async initWebStore(): Promise<void> {
    try {
      await this.conexionSQLite.initWebStore();
    } catch(err: any) {
      const msg = err.message ? err.message : err;
      return Promise.reject(`initWebStore: ${err}`);
    }
  }
  
  async openDatabase(dbName:string, encrypted: boolean, mode: string, version: number, readonly: boolean): Promise<SQLiteDBConnection> {
    let db: SQLiteDBConnection;
    const retCC = (await this.conexionSQLite.checkConnectionsConsistency()).result;
    let isConn = (await this.conexionSQLite.isConnection(dbName, readonly)).result;
    if(retCC && isConn) {
      db = await this.conexionSQLite.retrieveConnection(dbName, readonly);
    } else {
      db = await this.conexionSQLite.createConnection(dbName, encrypted, mode, version, readonly);
    }
    await db.open();
    return db;
  }

  async retrieveConnection(dbName:string, readonly: boolean): Promise<SQLiteDBConnection> {
    return await this.conexionSQLite.retrieveConnection(dbName, readonly);
  }

  async closeConnection(database:string, readonly?: boolean): Promise<void> {
    const readOnly = readonly ? readonly : false;
    return await this.conexionSQLite.closeConnection(database, readOnly);
  }

  async addUpgradeStatement(options:capSQLiteUpgradeOptions): Promise<void> {
    await this.sqlitePlugin.addUpgradeStatement(options);
    return;
  }

  async saveToStore(database:string) : Promise<void> {
    return await this.conexionSQLite.saveToStore(database);
  }*/
}
