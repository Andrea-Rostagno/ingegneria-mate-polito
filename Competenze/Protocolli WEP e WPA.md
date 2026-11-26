---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [WEP, Wired Equivalent Privacy, WPA, Wi-Fi Protected Access, WPA2, WPA3, TKIP, Temporal Key Integrity Protocol, KRACK, sicurezza Wi-Fi, algoritmo Michael, MIC]
tags: [competenza, area/informatica]
---

# Protocolli WEP e WPA

> Protocolli di sicurezza delle reti Wi-Fi. WEP (RC4 + CRC-32) è insicuro. WPA (TKIP) ne corregge i limiti restando su RC4. WPA2 passa ad AES. WPA3 introduce l'autenticazione SAE.

## Definizione / enunciato
Dalle slide di Bazzanella (pp. 26-32):
- **WEP** (Wired Equivalent Privacy): cifratura **RC4** con chiavi da 40 o 104 bit e integrità con **CRC-32**. RC4 è molto veloce, adatto alla cifratura in tempo reale, ma il livello di sicurezza si è rivelato insufficiente. L'uso è sconsigliato.
- **WPA** (2003): protocollo **TKIP**, con:
  - una chiave per ogni stazione (*per-station*);
  - una chiave che cambia pacchetto per pacchetto (*per-packet*);
  - integrità con l'algoritmo **Michael**, molto più robusto di quello del WEP;
  - *key refresh*: con più di due MIC-failure in un minuto si crea una nuova associazione e quindi una nuova chiave;
  - *IV mixing*: il seme a 128 bit di RC4 viene mescolato con il MAC address della stazione che trasmette.
- **WPA2** (2004): usa **AES** invece di RC4 ed è molto più sicuro. Nell'ottobre 2017 l'attacco **KRACK** (Key Reinstallation Attacks) ha mostrato come vedere, decodificare e manipolare il traffico; i firmware sono stati poi aggiornati.
- **WPA3** (annunciato a gennaio e ufficializzato a giugno 2018), in due versioni:
  - *Personal*: autenticazione con **SAE**, resistente all'attacco a dizionario, che protegge il traffico anche se la password viene compromessa in seguito;
  - *Enterprise*: cifratura a 192 bit secondo le indicazioni CNSS.

## Formule chiave
Nessuna formula nelle slide. Il polinomio CRC-32 (CCITT-32) è quello riportato nella nota sul checksum.

## Intuizione
Il CRC non ha chiave e non autentica nulla. WPA aggiunge chiavi che cambiano per stazione e per pacchetto e un vero MIC. WPA2 cambia proprio il cifrario. WPA3 rende lo scambio di chiavi resistente agli attacchi offline sulla password.

## Come si usa
È un caso di studio su come scelte crittografiche deboli (cifrario a flusso con chiavi riusate, checksum al posto del MAC) rompano un protocollo reale. Lo stesso SAE di WPA3 è trattato in dettaglio nella parte sui protocolli di scambio di chiavi con password.

## Nei corsi
- **Crittografia** (magistrale): ultima parte delle slide di Bazzanella "Checksum, MAC e funzioni hash". SAE e WPA3 tornano nelle dispense inglesi (Crypto 14, Nota 14.1.1). Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto9.pdf` (pp. 26-32); `magistrale/Crittografia/Slide/slides week 1-14/week14/Crypto14.pdf` (p. 2).

## Prerequisiti
- [[RC4]]: cifrario di WEP e WPA
- [[Checksum e CRC]]: integrità di WEP con il CRC-32
- [[AES]]: cifrario di WPA2

## Porta a
- Nessuno.

## Collegati
- [[Simultaneous Authentication of Equals]]: autenticazione di WPA3
- [[Message authentication code]]: il MIC Michael di TKIP sostituisce il CRC
- [[Riuso del keystream]]: rischio tipico di un cifrario a flusso con chiavi ripetute
