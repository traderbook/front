import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import Menu, { MenuItem } from 'material-ui/Menu';
import Connection from '../connection/Connection.react'
import Button from 'material-ui/Button'
import './Header.scss'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: true,
            anchorEl: null,
            open: false,
            openConnection: false,
            connect: false,
            name: ''
        }
    }

    handleChange = (event, checked) => {
        this.setState({ auth: checked })
    }

    handleMenu = (event) => {
        if (this.state.connect) {
            this.setState({ open: true, anchorEl: event.currentTarget });
        }
    }

    handleClose = () => {
        this.setState({ open: false, anchorEl: null });
    }

    handleCloseDeconnect = () => {
        this.setState({ open: false, anchorEl: null, connect: false });
    }

    sendRequestConnection = () => {
        this.setState({ openConnection: true })
    }

    connection = (login) => {
        console.log('Header.react.js -> 44 : coucou', login)
        this.setState({ connect: true, name: login })
    }

    render() {
        return (
            <div style={styles.root}>
                <Connection open={this.state.openConnection} connection={this.connection} close={() => { this.setState({ openConnection: false }) }} />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography style={styles.flex} variant="title" color="inherit">
                            TraderBook
                        </Typography>
                        <div>
                            {this.state.connect ?
                                <div className="login">
                                    <p>
                                        {this.state.name}
                                    </p>
                                    <IconButton
                                        aria-owns={this.state.anchorEl ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />

                                    </IconButton></div>
                                : <Button onClick={this.sendRequestConnection} color="inherit">Connexion</Button>
                            }
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile - {this.state.name}</MenuItem>
                                <MenuItem onClick={this.handleCloseDeconnect}>Déconnexion</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};