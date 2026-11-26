---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [e-voting, voto elettronico, voto elettronico remoto, voto ripetuto, credenziali multiple, coercion resistance]
tags: [competenza, area/informatica]
---

# Voto elettronico su blockchain

> Votazione remota con tecnologie elettroniche, in cui una blockchain permissioned con consenso PoA può dare affidabilità, trasparenza e verificabilità; il punto debole resta il momento del voto sul dispositivo dell'elettore.

## Definizione / enunciato
Il **voto elettronico** (e-voting) è la possibilità di votare in remoto con tecnologie elettroniche e informatiche. Esistono già sistemi non basati su blockchain (Svizzera, Estonia, Canada). **Motivazioni**: comodità, risparmio, estensione del diritto di voto (fuori sede, estero, aree remote, malati), più partecipazione, coinvolgimento verso una democrazia partecipativa. **Criticità**: affidabilità, efficienza, trasparenza, verificabilità.

## Formule chiave
Nessuna formula.

## Intuizione
Scelte delle slide:
- **affidabilità**: nessun paese accetterebbe un sistema controllato da sconosciuti, quindi la blockchain sarebbe **permissioned**;
- **efficienza**: la PoW non è adatta (permissioned e costosa); più ragionevole una **Proof of Authority** con gestori affidabili, forse uno per collegio elettorale;
- **punto debole**: il voto e il suo invio dal dispositivo dell'elettore. Il singolo dispositivo è attaccabile, ma per cambiare l'esito bisognerebbe attaccarne milioni.

## Come si usa
Il problema più delicato è la **libertà del voto**: senza il seggio qualcuno può influenzare il voto altrui. Rimedi di protocollo, non di blockchain: **voto ripetuto** (vale l'ultimo) e **credenziali multiple**. La dispensa elenca i requisiti difficili da conciliare: anonimato, verificabilità, coercion resistance, segretezza, unicità, usabilità.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/09-Applicazioni.pdf` (pp. 49-53); dispensa §9.10.

## Prerequisiti
- [[Criteri di adozione della blockchain]]: valutare se la blockchain serve
- [[Proof of Authority]]: consenso proposto per la blockchain elettorale

## Porta a
- Nessuno.

## Collegati
- [[Self Sovereign Identity]]: identificare l'elettore avente diritto
