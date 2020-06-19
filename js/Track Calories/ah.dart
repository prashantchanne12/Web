       child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Container(
                        height: 50.0,
                        width: 350.0,
                        decoration: BoxDecoration(
                            border: Border.all(
                                color: kLightColor.withOpacity(0.3))),
                        child: Material(
                          borderRadius: BorderRadius.circular(5.0),
                          color: Colors.white,
                          child: InkWell(
                            onTap: () {
                              print('Clicked!!');
                            },
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                SizedBox(
                                  width: 10.0,
                                ),
                                Padding(
                                  padding: EdgeInsets.only(left: 30.0),
                                  child: FaIcon(
                                    FontAwesomeIcons.facebookF,
                                    color: kPrimaryColor,
                                  ),
                                ),
                                SizedBox(
                                  width: 30.0,
                                ),
                                Padding(
                                  padding: EdgeInsets.all(5.0),
                                  child: Text(
                                    'Continue with Facebook',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                        fontFamily: kSF_text,
                                        fontSize: 17.0,
                                        color: kPrimaryColor),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),

                                          Container(
                      width: 414.0,
                      height: 242.0,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment(1.0, -0.18),
                          end: Alignment(-1.17, 0.18),
                          colors: [
                            const Color(0xff7268f7),
                            const Color(0xffbe2edd)
                          ],
                          stops: [0.0, 1.0],
                        ),
                      ),
                    ),