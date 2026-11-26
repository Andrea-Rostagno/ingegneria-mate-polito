---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [SSI, identità digitale autosovrana, identità auto-sovrana, credenziali verificabili, verifiable credentials, identità digitale decentralizzata]
tags: [competenza, area/informatica]
---

# Self Sovereign Identity

> Identità digitale in cui è l'utente a controllare i propri dati: autorità fidate emettono credenziali crittografiche che l'utente conserva in un wallet e mostra, anche in parte, a chi deve verificarle.

## Definizione / enunciato
L'identità digitale (nome, età, certificazioni, credenziali) è tradizionalmente gestita da soggetti centralizzati (governi, banche, social network), con furti di dati e poca privacy. Nella **Self-Sovereign Identity** il controllo passa all'utente. Struttura:
1. **registrazione dell'identità**: l'utente crea un wallet digitale per le credenziali crittografiche;
2. **emissione delle credenziali**: autorità affidabili (università, ospedali, comuni) rilasciano certificati digitali verificabili;
3. **verifica**: terze parti (banche, aziende, servizi online) verificano le credenziali senza accedere ai dati originali.

## Formule chiave
Nessuna formula. Ruoli (dispensa): issuer, holder, verifier, registro per chiavi e revoche.

## Intuizione
La verifica poggia sulla firma dell'emittente, non su un database centrale da interrogare: l'utente diventa davvero proprietario dei dati e può rivelarli a chi vuole, anche in modo parziale e personalizzato. Le slide immaginano liberi mercati dei dati, dove l'utente vende o dona i propri dati.

## Come si usa
Progetti citati: IDunion (infrastruttura europea interoperabile e decentralizzata), BrightID (identità sui social con privacy). Nel voto elettronico il problema di garantire che voti davvero l'avente diritto è affine.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/09-Applicazioni.pdf` (pp. 54-56); dispensa §9.11.

## Prerequisiti
- [[Criteri di adozione della blockchain]]: molti soggetti senza fiducia reciproca
- [[Wallet di criptovalute]]: wallet per custodire le credenziali
- [[Firma digitale]]: le credenziali sono verificabili tramite firma

## Porta a
- Nessuno.

## Collegati
- [[Voto elettronico su blockchain]]: identificare l'avente diritto
- [[Prova a conoscenza nulla]]: verificare un attributo senza rivelare il dato
