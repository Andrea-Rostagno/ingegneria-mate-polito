---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["bilinear pairing", "pairing", "forma bilineare crittografica", "pairing di Weil", "pairing di Tate", "Weil pairing", "schema di Joux", "Joux key exchange", "firma BLS", "BLS signature", "gap group"]
tags: [competenza, area/informatica]
---

# Pairing bilineare

> È una mappa $e:G_1\times G_1\to G_2$ bilineare e calcolabile in modo efficiente. Trasporta il logaritmo discreto da una curva ellittica a un campo finito e permette protocolli nuovi, come lo scambio a tre di Joux e le firme corte BLS.

## Definizione / enunciato
Siano $(G_1,+)$ e $(G_2,\cdot)$ gruppi abeliani. Un **pairing** è una funzione $e:G_1\times G_1\to G_2$ tale che
$$e(aP,bQ)=e(P,Q)^{ab}\qquad\forall P,Q\in G_1,\ a,b\in\mathbb Z.$$
È **non degenere** se $e(P,P)^m=1\Rightarrow mP=0$. In crittografia serve che sia calcolabile in modo efficiente. Tipicamente $G_1$ è una curva ellittica e $G_2$ un campo finito; i pairing noti sono quello di Weil e quello di Tate (`Critto_week7.pdf` §7.6.1, nota 7.6.2).

## Formule chiave
**Teorema 7.6.3 (DLP e pairing).** Se $Q=aP$ in $G_1$, posto $g=e(P,P)$ e $h=e(P,Q)$ si ha $h=g^a$ in $G_2$. Un algoritmo efficiente per il DLP in $G_2$ risolve quindi il DLP in $G_1$.

**Teorema 7.6.4 (DDH).** Dati $(P,aP,bP,cP)$:
$$cP=abP\iff e(P,cP)=e(aP,bP),$$
quindi il Decisional DH in $G_1$ è facile. Un **gap group** è un gruppo ciclico in cui il DH computazionale è infattibile ma il DDH è facile (nota 7.6.5).

## Intuizione
La bilinearità "sposta gli esponenti" fuori dal pairing. È un'arma a doppio taglio:
- **in negativo**: riduce l'ECDLP a un DLP in $GF(q^k)$. È l'attacco MOV, efficace sulle curve supersingolari con $k\le6$ (`Crypto12.pdf` §12.5.2);
- **in positivo**: rende verificabili relazioni tra multipli senza conoscere gli scalari.

## Come si usa
**Scambio di Joux** (tre utenti, un solo round). $G_1$ e $G_2$ hanno ordine primo $q$, $P$ genera $G_1$, e $a,b,c\in\mathbb Z_q^*$ sono le chiavi segrete di A, B, C.
1. Ognuno invia agli altri due la propria chiave pubblica ($aP$, $bP$, $cP$).
2. A calcola $e(cP,bP)^a$, B calcola $e(cP,aP)^b$, C calcola $e(aP,bP)^c$.
3. Tutti ottengono il segreto comune $e(P,P)^{abc}$ (`Critto_week7.pdf` p. 25).

**Firma BLS** (Boneh-Lynn-Shacham, paper in `week12/`), nella versione concreta del paper:
- **chiavi**: privata $x\in\mathbb Z_q^*$, pubblica $R=xP$;
- **firma**: $S_M=xP_M$, dove $P_M$ è il punto ottenuto dal messaggio con hash; la firma è la coordinata $x$ di $S_M$;
- **verifica**: confronta $u=e(P,\varphi(S))$ e $v=e(R,\varphi(h(M)))$, cioè controlla che $(P,R,h(M),S)$ sia una tupla Diffie-Hellman.

`Crypto12.pdf` §12.4 riporta solo il titolo "BLS Signature".

## Nei corsi
- **Crittografia** (magistrale): ultima parte della lezione 7 (Di Scala) e cenno nella week 12. Fonti:
  - `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week7.pdf` (§7.6, pp. 23-25);
  - `magistrale/Crittografia/Slide/slides week 1-14/week12/Crypto12.pdf` (§12.4-12.5, pp. 7-8);
  - `magistrale/Crittografia/Slide/slides week 1-14/week12/22480516 (Short signatures from the weil pairing).pdf` (§3.4, schema concreto).

## Prerequisiti
- [[Curva ellittica]]: $G_1$ è il gruppo dei punti
- [[Campo finito]]: $G_2$ sta in un'estensione $GF(q^k)$
- [[Problema del logaritmo discreto]]: il pairing riduce il DLP tra gruppi

## Porta a
- [[Firma digitale]]: firme corte BLS

## Collegati
- [[Diffie-Hellman su curve ellittiche]]: Joux generalizza lo scambio a tre parti
- [[Scambio di chiavi Diffie-Hellman]]: il pairing rende facile il DDH
