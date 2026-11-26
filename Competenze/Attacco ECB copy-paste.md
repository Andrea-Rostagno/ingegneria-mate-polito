---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["ECB copy&paste", "ECB cut-and-paste", "cut-and-paste attack", "attacco taglia e incolla"]
tags: [competenza, area/informatica]
---

# Attacco ECB copy-paste

> Attacco che costruisce un nuovo testo cifrato valido incollando blocchi cifrati presi da crittogrammi diversi, sfruttando il fatto che in ECB ogni blocco si cifra indipendentemente.

## Definizione / enunciato
**Scenario dell'esercitazione:**
- un server riceve un indirizzo email e costruisce il profilo `email=<email>&UID=XX&role=user`;
- lo cifra in AES-128 ECB e restituisce il risultato come cookie cifrato;
- l'obiettivo è costruire, senza conoscere la chiave, un cookie che si decifri in `...&role=admin`.

Dato che in ECB $C_j=\mathrm{Enc}_k(P_j)$ per ogni blocco separatamente, una concatenazione di blocchi cifrati validi si decifra nella concatenazione dei rispettivi blocchi in chiaro.

## Formule chiave
Si scelgono gli input in modo che i confini di blocco (16 byte) cadano nei punti giusti:
1. si invia l'email `aaaaaaaaa@b.it`, tale che `email=aaaaaaaaa@` occupi il primo blocco e `role=` termini esattamente il secondo. Si conservano i blocchi cifrati $C_{1.1}\|C_{1.2}$;
2. si invia l'email `aaaaaaaaa@adminbbbbbbbbbbb`, tale che il secondo blocco sia `admin` seguito da riempimento. Si conserva quel blocco cifrato $C_{2.2}$;
3. si incolla $C_{1.1}\|C_{1.2}\|C_{2.2}$.

Le slide mostrano anche come costruire un blocco finale con padding corretto (`\x0b`, `\x10`). I dettagli dei riempimenti vanno verificati sul PDF.

## Intuizione
ECB è un "codice": ogni blocco cifrato è una parola del codice che l'attaccante può raccogliere e riordinare a piacere. Senza un controllo d'integrità il destinatario non si accorge del montaggio. È la versione pratica del block replay descritto nelle dispense di teoria.

## Come si usa
Passi per un esercizio di questo tipo:
- si calcola la lunghezza del prefisso fisso;
- si allinea il valore desiderato (`admin`) all'inizio di un blocco;
- si raccoglie il blocco cifrato che lo contiene e lo si incolla al posto dell'ultimo blocco del cookie legittimo.

**Contromisure:** non usare ECB, e autenticare il cookie con un MAC.

## Nei corsi
- **Crittografia** (magistrale): esercitazioni di Basile "Attacks against symmetric crypto (II)". Il codice corrispondente è nella cartella `ECBCopyPaste` del repository AY2021. Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200416_03LPYOV_symmetric_attacks2.pdf` (pp. 6-7); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (p. 11, block replay).

## Prerequisiti
- [[Modalità ECB]]: l'attacco sfrutta l'indipendenza dei blocchi

## Porta a
- [[Message authentication code]]: la contromisura

## Collegati
- [[Attacco ECB byte-at-a-time]]: altro attacco a ECB, che decifra invece di forgiare
- [[Attacco bit flipping]]: forgia per manipolazione dei bit, efficace contro CBC e i cifrari a flusso
