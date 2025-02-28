var SignalRLib = {

    $vars: {
        connection: null,
        lastConnectionId: '',
        connectedCallback: null,
        disconnectedCallback: null,
        handlerCallback1: null,
        handlerCallback2: null,
        handlerCallback3: null,
        handlerCallback4: null,
        handlerCallback5: null,
        handlerCallback6: null,
        handlerCallback7: null,
        handlerCallback8: null,
        invokeCallback: function (args, callback) {
            var sig = 'v';
            var messages = [];
            for (var i = 0; i < args.length; i++) {
                var message = args[i];
                var bufferSize = lengthBytesUTF8(message) + 1;
                var buffer = _malloc(bufferSize);
                stringToUTF8(message, buffer, bufferSize);
                messages.push(buffer);
                sig += 'i';
            }
            Runtime.dynCall(sig, callback, messages);
        }
    },

    InitJs: function (url) {
        url = Pointer_stringify(url);
        vars.connection = new signalR.HubConnectionBuilder()
            .withUrl(url)
            .build();
    },

    ConnectJs: function (connectedCallback, disconnectedCallback) {
        vars.connectedCallback = connectedCallback;
        vars.disconnectedCallback = disconnectedCallback;
        vars.connection.start()
            .then(function () {
                vars.lastConnectionId = vars.connection.connectionId;
                vars.connection.onclose(function (err) {
                    if (err) {
                        console.error('Connection closed due to error: "' + err.toString() + '".');
                    }
                    vars.invokeCallback([vars.lastConnectionId], vars.disconnectedCallback);
                });
                vars.connection.onreconnecting(function (err) {
                    console.log('Connection lost due to error: "' + err.toString() + '". Reconnecting.');
                });
                vars.connection.onreconnected(function (connectionId) {
                    console.log('Connection reestablished. Connected with connectionId: "' + connectionId + '".');
                    vars.lastConnectionId = connectionId;
                    vars.invokeCallback([vars.lastConnectionId], vars.connectedCallback);
                });
                vars.invokeCallback([vars.lastConnectionId], vars.connectedCallback);
            }).catch(function (err) {
                return console.error(err.toString());
            });
    },

    StopJs: function () {
        if (vars.connection) {
            vars.connection.stop()
                .catch(function (err) {
                    return console.error(err.toString());
                });
        }
    },

    InvokeJs: function (methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        methodName = Pointer_stringify(methodName);
        if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6 && arg7 && arg8 && arg9 && arg10) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            arg6 = Pointer_stringify(arg6);
            arg7 = Pointer_stringify(arg7);
            arg8 = Pointer_stringify(arg8);
            arg9 = Pointer_stringify(arg9);
            arg10 = Pointer_stringify(arg10);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6 && arg7 && arg8 && arg9) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            arg6 = Pointer_stringify(arg6);
            arg7 = Pointer_stringify(arg7);
            arg8 = Pointer_stringify(arg8);
            arg9 = Pointer_stringify(arg9);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6 && arg7 && arg8) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            arg6 = Pointer_stringify(arg6);
            arg7 = Pointer_stringify(arg7);
            arg8 = Pointer_stringify(arg8);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6 && arg7) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            arg6 = Pointer_stringify(arg6);
            arg7 = Pointer_stringify(arg7);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            arg6 = Pointer_stringify(arg6);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5, arg6)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4 && arg5) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            arg5 = Pointer_stringify(arg5);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4, arg5)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3 && arg4) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            arg4 = Pointer_stringify(arg4);
            vars.connection.invoke(methodName, arg1, arg2, arg3, arg4)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2 && arg3) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            arg3 = Pointer_stringify(arg3);
            vars.connection.invoke(methodName, arg1, arg2, arg3)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1 && arg2) {
            arg1 = Pointer_stringify(arg1);
            arg2 = Pointer_stringify(arg2);
            vars.connection.invoke(methodName, arg1, arg2)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        } else if (arg1) {
            arg1 = Pointer_stringify(arg1);
            vars.connection.invoke(methodName, arg1)
                .catch(function (err) {
                    return console.error(err.toString());
                });
        }
    },

    OnJs: function (methodName, argCount, callback) {
        methodName = Pointer_stringify(methodName);
        argCount = Number.parseInt(Pointer_stringify(argCount));
        if (argCount === 1) {
            vars.handlerCallback1 = callback;
            vars.connection.on(methodName, function (arg1) {
                vars.invokeCallback([methodName, arg1], vars.handlerCallback1);
            });
        } else if (argCount === 2) {
            vars.handlerCallback2 = callback;
            vars.connection.on(methodName, function (arg1, arg2) {
                vars.invokeCallback([methodName, arg1, arg2], vars.handlerCallback2);
            });
        } else if (argCount === 3) {
            vars.handlerCallback3 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3) {
                vars.invokeCallback([methodName, arg1, arg2, arg3], vars.handlerCallback3);
            });
        } else if (argCount === 4) {
            vars.handlerCallback4 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3, arg4) {
                vars.invokeCallback([methodName, arg1, arg2, arg3, arg4], vars.handlerCallback4);
            });
        } else if (argCount === 5) {
            vars.handlerCallback5 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3, arg4, arg5) {
                vars.invokeCallback([methodName, arg1, arg2, arg3, arg4, arg5], vars.handlerCallback5);
            });
        } else if (argCount === 6) {
            vars.handlerCallback6 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3, arg4, arg5, arg6) {
                vars.invokeCallback([methodName, arg1, arg2, arg3, arg4, arg5, arg6], vars.handlerCallback6);
            });
        } else if (argCount === 7) {
            vars.handlerCallback7 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                vars.invokeCallback([methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7], vars.handlerCallback7);
            });
        } else if (argCount === 8) {
            vars.handlerCallback8 = callback;
            vars.connection.on(methodName, function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
                vars.invokeCallback([methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8], vars.handlerCallback8);
            });
        }
    },

};

autoAddDeps(SignalRLib, '$vars');
mergeInto(LibraryManager.library, SignalRLib);
