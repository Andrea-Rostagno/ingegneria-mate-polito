---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["keystream reuse", "nonce reuse", "riuso del nonce", "two-time pad", "many-time pad", "keystream reuse attack"]
tags: [competenza, area/informatica]
---

# Riuso del keystream

> Attacco ai cifrari a flusso e alle modalità a flusso (CTR, OFB, CFB) quando lo stesso keystream, cioè la stessa coppia chiave-nonce, cifra più messaggi.

## Definizione / enunciato
Un cifrario a flusso genera un keystream $KS$ da una chiave (es. RC4) e, nelle versioni moderne e nelle modalità a flusso dei cifrari a blocchi, anche da un nonce. Idealmente si dovrebbe essere il più vicini possibile al one-time pad di Shannon. Per questo:
- non si riusa mai il nonce (*number used once*);
- si cambia spesso la chiave, cosa facile se la si concorda con uno scambio di chiavi a chiave pubblica.

Se il keystream si ripete, i messaggi diventano attaccabili.

## Formule chiave
Con $C_i=P_i\oplus KS$:
- **attacco banale (KPA):** appena si conoscono un testo in chiaro e il suo cifrato, si ricava il flusso e si decifra ogni altro cifrato,
$$KS=P_1\oplus C_1,\qquad P_2=C_2\oplus KS;$$
- **senza testo noto:** le proprietà del chiaro si propagano al cifrato, perché
$$C_1\oplus C_2=P_1\oplus P_2.$$

## Intuizione
Lo XOR con un keystream è sicuro solo se il keystream si usa una volta (OTP). Due messaggi cifrati con lo stesso flusso formano un "two-time pad": il flusso si elimina e restano i testi in chiaro sovrapposti, attaccabili con la statistica della lingua.

## Come si usa
Per **messaggi di testo** (ASCII/UTF-8):
- si indovina un byte del keystream alla volta;
- si scarta un byte candidato se produce caratteri non stampabili in qualche cifrato;
- con molti cifrati si usano le frequenze delle lettere ("etaoin shrdlu", le 12 lettere più frequenti dell'inglese).

Strumenti citati nelle slide: `xortool`, `MTP`, `cryptonita`.

Nell'esercitazione il codice usa una tabella di frequenze (`freq_data.py`).

## Nei corsi
- **Crittografia** (magistrale): esercitazioni di Basile "Attacks against symmetric crypto (IV)". Il codice è in `keystream_reuse` del repository AY2021. Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200430_03LPYOV_symmetric_attacks4.pdf` (pp. 3-7).

## Prerequisiti
- [[Cifrario a flusso]]: l'attacco riguarda il suo keystream
- [[One-time pad]]: la regola violata è "usare il pad una volta sola"

## Porta a
- [[Indice di coincidenza]]: le statistiche della lingua servono a separare i testi

## Collegati
- [[Modalità CTR]]: contatori ripetuti danno keystream ripetuto
- [[Modalità CFB e OFB]]: valgono le stesse regole sull'IV
- [[RC4]]: l'esempio di keystream generato dalla sola chiave
- [[Attacco bit flipping]]: altro attacco allo XOR dei cifrari a flusso
