library login;

import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  int _counter = 0;

  void _onSubmit() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });

    // Validate will return true if the form is valid, or false if
    // the form is invalid.
    if (_formKey.currentState.validate()) {
      // Process data.
    }
  }

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the LoginPage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.
          child: Form(
              key: _formKey,
              child: Center(
                widthFactor: 5,
                child: Container(
                  margin: const EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 300.0),
                  padding: const EdgeInsets.all(20.0),
                  // color: Colors.amber[600],
                  width: 500.0,
                  height: 300.0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      TextFormField(
                        decoration: const InputDecoration(
                          hintText: 'Enter your username',
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Please enter your username';
                          }
                          return null;
                        },
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 16.0),
                        child: TextFormField(
                          obscureText: true,
                          decoration: const InputDecoration(
                            hintText: 'Enter your password',
                          ),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter your password';
                            }
                            return null;
                          },
                        ),
                      ),
                      SizedBox(
                          width: double.infinity,
                          child: RaisedButton(
                            onPressed: _onSubmit,
                            child: Text('Login'),
                          )),
                      Padding(
                          padding: EdgeInsets.fromLTRB(0, 30.0, 0, 0),
                          child: Column(children: <Widget>[
                            Text('User - user & password'),
                            Text('Admin - admin & password')
                          ]))
                    ],
                  ),
                ),
              ))),
      // floatingActionButton: FloatingActionButton(
      //   onPressed: _incrementCounter,
      //   tooltip: 'Increment',
      //   child: Icon(Icons.add),
      // ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
