import React from 'react';
import styles from './User.module.css';
import { Table } from '../../components/Table';

export class User extends React.Component {
    render(): React.ReactNode {
        return <div className={styles.main}>
            <h1>Users</h1>
            <Table />
        </div>
    }
}
