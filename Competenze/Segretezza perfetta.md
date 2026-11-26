---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [perfect secrecy, segretezza perfetta di Shannon, teorema di Shannon sulla segretezza perfetta, Shannon's perfect secrecy theorem, cifrario secondo Shannon, quadrato latino, latin square, indistinguibilità perfetta, perfect indistinguishability]
tags: [competenza, area/informatica]
---

# Segretezza perfetta

> Un cifrario ha segretezza perfetta se osservare il crittogramma non cambia la probabilità di nessun messaggio, cioè se testo in chiaro e crittogramma sono indipendenti. Il teorema di Shannon la caratterizza con chiavi uniformi e una tabella di cifratura che è un quadrato latino.

## Definizione / enunciato
**Cifrario secondo Shannon** (`Critto_week2.pdf` §2.2): $T=(\mathrm{Enc}_k,\mathrm{Dec}_k,(\mathcal P,\Pr_1),(\mathcal K,\Pr_2))$. Le probabilità *a priori* su messaggi e chiavi inducono una distribuzione su $\mathcal C$. Chiave $k$, messaggio $P$ e crittogramma $C$ sono variabili aleatorie, con $k$ e $P$ indipendenti. Lo scenario è un COA contro un nemico senza limiti di tempo.

**Perfect secrecy.** $T$ ha segretezza perfetta se, per ogni crittogramma possibile $C_0$ (cioè di probabilità positiva) e per ogni $P_0$,
$$\Pr[P=P_0]=\Pr[P=P_0\mid C=C_0],$$
cioè se e solo se $C$ e $P$ sono indipendenti.

**Teorema 2.2.9 (Shannon).** Sia $|\mathcal K^+|=|\mathcal P^+|=|\mathcal C^+|$, dove il $^+$ indica gli elementi di probabilità positiva. Sono equivalenti:
1. $T$ ha segretezza perfetta;
2. la distribuzione su $\mathcal K^+$ è uniforme e la tabella $\mathrm{Enc}(\cdot,\cdot):\mathcal K^+\times\mathcal P^+\to\mathcal C^+$ è un **quadrato latino**.

## Formule chiave
$$\mathcal K(P_0,C_0)=\{k:\mathrm{Enc}_k(P_0)=C_0\},\qquad \Pr[C=C_0\mid P=P_0]=\Pr[\mathcal K(P_0,C_0)]$$
$$\text{perfect secrecy}\ \Rightarrow\ |\mathcal K^+|\ge|\mathcal C^+|\ge|\mathcal P^+|$$

## Intuizione
Ogni crittogramma deve poter provenire da ogni messaggio con la stessa probabilità. Servono quindi almeno tante chiavi quanti messaggi, ed esse devono essere equiprobabili.

La proprietà non dipende dalla distribuzione su $\mathcal P$ (Nota 2.2.10). Nella dimostrazione di (ii)⇒(i):
$$\Pr[C=C_0]=\sum_i\tfrac1{|\mathcal K|}\Pr[P=P_i]=\tfrac1{|\mathcal K|}=\Pr[C=C_0\mid P=P_j].$$

## Come si usa
- **Esempio 2.2.1:** $\mathcal K=\{k_1,k_2,k_3\}$ con probabilità $1/100,1/100,98/100$ e $\mathcal P=\{P_1,P_2,P_3\}$ con probabilità $24/50,2/50,24/50$. Le probabilità dei crittogrammi sono $\Pr[C=\clubsuit]\approx0.47$, $\Pr[C=\spadesuit]\approx0.47$, $\Pr[C=\diamondsuit]\approx0.04$. Le chiavi non sono uniformi, quindi il cifrario non ha segretezza perfetta.
- **Teorema 2.2.14:** perfect secrecy equivale a **indistinguibilità perfetta**, cioè $\Pr[\mathrm{IndPer}_{A,T}=1]=1/2$ per ogni crittanalista $A$.
- **Esercizio 2.2.22:** $T$ ha segretezza perfetta se e solo se $H(P\mid C)=H(P)$.

## Nei corsi
- **Crittografia** (magistrale): lezione 2, "Teoria di Shannon" (da [Shannon49]). Nella versione inglese compare tra le "Security Notions" insieme a OTP, sicurezza computazionale e sicurezza dimostrabile. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 9-16); `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.11.2, p. 25).

## Prerequisiti
- [[Probabilità condizionata]]: le probabilità a posteriori dato $C=C_0$
- [[Indipendenza di variabili aleatorie]]: perfect secrecy equivale a $P$ indipendente da $C$
- [[Schema di cifratura simmetrica]]: il cifrario di Shannon lo arricchisce di probabilità

## Porta a
- [[One-time pad]]: realizza la segretezza perfetta
- [[Sicurezza IND-CPA]]: versione computazionale dell'indistinguibilità
- [[Entropia di Shannon]]: caratterizzazione $H(P\mid C)=H(P)$

## Collegati
- Nessuno.
