// File: cgp-idle.service.ts
// Author: Joseph M Diaz
// Date: 6/8/2017
// Desc: CGP Idle and Token Refresh timers.
// Other Contributors:

import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { config } from '../../../config/config';
import { cgpAuthentication } from '../../../modules/cgp-authentication';
import { CgpSnackbarService } from '../cgp-snackbar/cgp-snackbar.service';
import { CgpIdleDialogComponent } from './cgp-idle-dialog/cgp-idle-dialog.component';

@Injectable()
export class CgpIdleService {
    private idleTimerConfig = config.idleTimer;
    private tokenRefreshTimer = null;
    private tokenTimer = null;
    private countdown = null;
    private timeLeft = null;
    private isActive = false;

    constructor(private dialog: MdDialog, private cgpSnackbarService: CgpSnackbarService) {}

    setIsActive() {
        this.isActive = true;
    }

    stayLoggedIn() {
        this.refreshToken();
        this.startTimers();
    }

    refreshToken() {
        var self = this;

        cgpAuthentication.refreshToken(function(err, data) {
            if (err) {
                self.cgpSnackbarService.showSnackbar({
                    message: 'Oops there was an error refreshing your session.',
                    action: 'LOG BACK IN',
                    duration: 10000,
                    onAction: () => {
                        window.location.replace(window.location.origin + window.location.pathname);
                    }
                });
                window.location.replace('#/logged-out');
            }
        });
    }

    startTimers() {
        this.startTokenRefreshTimer();
        this.startTokenTimer();
    }

    clearTimers() {
        this.clearTokenRefreshTimer();
        this.clearTokenTimer();
        this.clearCountdown();
    }

    startTokenRefreshTimer() {
        let self = this;
        let timerInterval = self.idleTimerConfig.tokenRefreshInterval;

        self.clearTokenRefreshTimer();
        self.tokenRefreshTimer = setInterval(function() {
            if (self.isActive) {
                self.refreshToken();
                self.startTokenTimer();
            }

            self.isActive = false;
        }, timerInterval * 60000);
    }

    clearTokenRefreshTimer() {
        this.isActive = false;
        clearInterval(this.tokenRefreshTimer);
    }

    startTokenTimer() {
        let self = this;
        let warningInterval = self.idleTimerConfig.timeoutInterval - self.idleTimerConfig.warningTime;

        self.clearTokenTimer();

        if (warningInterval <= 0) {
            throw 'idleTimerConfig.timeoutInterval must be greater than idleTimerConfig.warningTime.';
        }

        self.tokenTimer = setInterval(function() {
            self.clearTokenRefreshTimer();
            self.clearTokenTimer();
            self.startCountdown();
        }, warningInterval * 60000);
    }

    clearTokenTimer() {
        clearInterval(this.tokenTimer);
        this.clearCountdown();
    }

    startCountdown() {
        let self = this;

        self.timeLeft = self.idleTimerConfig.warningTime * 60;
        self.clearCountdown();
        self.showIdleDialog();
        // self.countdown = setInterval(function() {
        //     self.timeLeft--;

        //     if (self.timeLeft < 1) {
        //         self.clearCountdown();
        //         window.location.replace('#/logged-out');
        //     }
        // }, 1000);
    }

    clearCountdown() {
        clearInterval(this.countdown);
    }

    showIdleDialog() {
        let dialogRef: MdDialogRef<CgpIdleDialogComponent>;

        dialogRef = this.dialog.open(CgpIdleDialogComponent, {
            disableClose: true
        });
        dialogRef.componentInstance.serviceRef = this;
        dialogRef.componentInstance.countdown = this.timeLeft;
    }
}
