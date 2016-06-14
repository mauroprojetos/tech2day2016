# An interactive bot for the Tech2Day 2016 edition

Call the +33756780106 (via Tropo self-service IVR - Interactive Voice Response) 
- have the Tech2Day program interactively spoken to you (Tropo Speech To Text),
- select a session and get more details (Tropo DTMF - touch tone),
- subscribe to a session and get an SMS (Tropo outbound SMS)

Text your email to the +33756780106 (via Tropo bi-directional SMS support)
- have your email adress registered in the service (via a Tropo Script)
- create a Spark Room to get interactive messaging (via Cisco Spark APIs)

Launch a CiscoSpark client (Web, iOS, android, windows or mac)
- get into the Tech2Day 1-1 Spark Room
- get real time info about what's going on (via a SparkBot)
- get into your next session room to interact with your speaker (via a SparkBot)


# Architecture

The Tech2Day interactive bot reads from the Tech2Day Sessions API,
leverages the Cisco Spark and Tropo APIs,

The bot is deployed on CleverCloud servers, and persists its Data into PostgreSQL.


# Want to learn more

http://web2day.co/evenements/hands-on-with-tropo-and-spark-cloud-apis/

http://web2day.co/evenements/bot-interactif-tech2day/


# License

MIT, see license file.

Feel free to use, reuse, extend, and contribute



