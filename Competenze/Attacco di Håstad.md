---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Hastad broadcast attack, Håstad's broadcast attack, attacco di Hastad, attacco broadcast a RSA, low public exponent attack, attacco a esponente pubblico basso, e = 3]
tags: [competenza, area/informatica]
---

# Attacco di Håstad

> Attacco a RSA con esponente pubblico piccolo (tipicamente $e=3$): se lo stesso messaggio è cifrato con $e$ moduli diversi, il teorema cinese dei resti ricostruisce $m^e$ sugli interi, e una radice $e$-esima intera dà $m$.

## Definizione / enunciato
**Broadcast** (`Critto8.pdf` pp. 20-21; `200521_03LPYOV_RSA_attacks_Python.pdf` p. 11). Lo stesso $M$ è inviato con $e=3$ a tre utenti con moduli coprimi a due a due:
$$C_i=M^3 \bmod N_i,\qquad i=1,2,3.$$
- Per il teorema cinese dei resti esiste un unico $C$ modulo $N_1N_2N_3$ con $C\equiv C_i\pmod{N_i}$.
- Siccome $M<N_i$, si ha $M^3<N_1N_2N_3$, quindi $C=M^3$ vale sugli interi.
- $M$ è la radice cubica intera di $C$.

**Caso degenere, esponente pubblico basso** (p. 10): se $e=3$ e $m$ è così piccolo che $m^e<n$, la riduzione modulo $n$ non avviene. $m$ è direttamente la radice intera di $c$, anche con un solo cifrato.

## Formule chiave
**Ricostruzione pratica** (`200521_03LPYOV_RSA_attacks_Python.pdf` p. 12):
- si pone $N=n_1\cdots n_e$ e $N_i=N/n_i$;
- con Bézout si trovano $u_i,v_i$ tali che $N_iu_i+n_iv_i=1$;
- si ricostruisce
$$c=\sum_{i=1}^{e} c_i\,u_i\,N_i \pmod N,\qquad m=\sqrt[e]{c}\ \text{(radice intera)}.$$

## Intuizione
Ogni cifrato rivela $m^e$ modulo un $n_i$ diverso. Con $e$ moduli il prodotto supera $m^e$, quindi la riduzione modulare "sparisce".

L'attacco non rivela $d$. Altrimenti RSA sarebbe inutilizzabile, visto che chiunque può creare cifrati di uno stesso messaggio (`Critto8.pdf` p. 21).

## Come si usa
**Quando funziona:**
- è efficace con $e=3$, perché è facile trovare 3 cifrati;
- con $e=65537$ servirebbero 65537 chiavi distinte (`200528_03LPYOV_RSA_attacks_Python2.pdf` p. 3).

Bazzanella nota che anche con esponenti diversi il sistema resta a rischio, servono solo più cifrati (`Critto8.pdf` p. 21). Le radici intere vanno calcolate con funzioni dedicate come `iroot`/`isqrt`, non con `pow` in virgola mobile (p. 5).

**Esercizio delle dispense** (`Crypto9.pdf` Exercise 9.2.14, p. 11) con suggerimento: usare il CRT.

**Contromisura:** un padding casuale rende diversi i messaggi effettivamente cifrati.

Per gli attacchi con esponente *privato* piccolo, le slide citano senza dettagli:
- il teorema di Wiener: se $q<p<2q$ e $d<\tfrac13N^{1/4}$, $d$ si ricava efficientemente;
- Boneh-Durfee, fino a $n^{0.292}$;
- Coppersmith.

(`Critto8.pdf` pp. 22-23; `200528_03LPYOV_RSA_attacks_Python2.pdf` p. 5)

## Nei corsi
- **Crittografia** (magistrale): teoria in Bazzanella e Di Scala, implementazione in Python con Basile. Fonti:
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 20-23);
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (p. 11);
  - `magistrale/Crittografia/Slide/presentations/presentations/200521_03LPYOV_RSA_attacks_Python.pdf` (pp. 5, 10-12);
  - `magistrale/Crittografia/Slide/presentations/presentations/200528_03LPYOV_RSA_attacks_Python2.pdf` (pp. 3, 5);
  - codice: `magistrale/Crittografia/Repository GitHub/cryptography-03lpyov-exercises/AY2021/attacks/RSA/hastad_broadcast_RSA.py`.

## Prerequisiti
- [[RSA]]: lo schema attaccato
- [[Teorema cinese dei resti]]: ricompone $m^e$ modulo $N_1\cdots N_e$
- [[Identità di Bézout]]: coefficienti $u_i$ della ricostruzione

## Porta a
- Nessuno.

## Collegati
- [[RSA con padding]]: la contromisura
- [[Attacco del modulo comune]]: caso duale, con stesso $n$ ed esponenti diversi
- [[Attacco LSB oracle a RSA]]: altro attacco pratico della stessa serie di laboratorio
