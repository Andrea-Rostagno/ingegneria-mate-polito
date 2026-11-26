---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["RC circuit", "carica del condensatore", "capacitor charging", "costante di tempo RC", "q(t) = Q(1 - e^{-t/RC})"]
tags: [competenza, area/fisica]
---

# Circuito RC

> Un generatore $V_0$ carica un condensatore $C$ attraverso una resistenza $R$: la carica cresce esponenzialmente verso $Q=V_0C$ e la corrente decade esponenzialmente.

## Definizione / enunciato
Circuito con generatore di f.e.m. $V_0$, resistenza $R$ e condensatore di capacità $C$; l'interruttore in posizione 1 carica, in posizione 2 scarica. La conservazione dell'energia per la carica $dq$ spostata dal generatore contro la d.d.p. del condensatore e la dissipazione per effetto Joule dà un'equazione differenziale lineare del primo ordine in $q(t)$, con condizione $q=0$ a $t=0$.

## Formule chiave
$$V_0\,dq=V_C\,dq+Ri\,dq\quad(\text{lavoro del generatore = energia nel condensatore + energia dissipata})$$
$$V_0-V_C=Ri,\qquad V_0-\frac{q}{C}=R\frac{dq}{dt},\qquad \ln(q-V_0C)=-\frac{t}{RC}+k$$
$$q(t)=V_0C\left(1-e^{-\frac{t}{RC}}\right)=Q\left(1-e^{-\frac{t}{RC}}\right),\qquad i(t)=\frac{V_0}{R}e^{-\frac{t}{RC}}$$
Condensatore piano con armature circolari di area $S$ (vuoto tra le armature):
$$E(t)=\frac{q(t)}{\varepsilon_0S}=\frac{Q}{\varepsilon_0S}\left(1-e^{-\frac{t}{RC}}\right)$$
La costante di tempo $RC$ non compare come formula a sé: si legge nell'esponente.

## Intuizione
All'inizio il condensatore scarico non oppone d.d.p. e la corrente vale $V_0/R$; man mano che si carica $V_C$ cresce, la corrente cala e si annulla quando $V_C=V_0$. È la struttura del circuito RL con $q$ al posto di $i$.

## Come si usa
Oltre allo studio del transitorio, il campo $E(t)$ variabile tra le armature è l'esempio con cui si introduce la corrente di spostamento: dalla legge di Ampère-Maxwell si ricava il campo magnetico dentro e fuori dal condensatore.

## Nei corsi
- **Fisica 2** (triennale): carica del condensatore all'inizio della lezione sulla legge di Ampère-Maxwell, ripresa nell'esempio a p. 15. Fonti: `triennale/ANNO 2/fisica 2/lezioni/28.   LEZIONE.pdf` (pp. 5-7, 15).

## Prerequisiti
- [[Capacità elettrica]]: V_C = q/C
- [[Legge di Ohm]]: caduta R i nel circuito
- [[Equazioni differenziali lineari del primo ordine]]: q(t) risolve un'equazione lineare del primo ordine

## Porta a
- [[Legge di Ampère-Maxwell]]: esempio del condensatore in carica

## Collegati
- Nessuno.
