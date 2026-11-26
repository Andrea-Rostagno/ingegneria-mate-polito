---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["symmetric 2x2 games", "giochi due per due", "two-player symmetric games", "gioco di coordinazione", "coordination game", "gioco di anti-coordinazione", "anti-coordination game", "gioco del pollo", "game of chicken", "hawk-dove", "falco-colomba", "discoordinazione", "matching pennies", "testa o croce", "sasso-carta-forbici", "rock-scissor-paper"]
tags: [competenza, area/network]
---

# Giochi 2x2 simmetrici

> I giochi a due giocatori e due azioni con ruoli scambiabili si classificano con quattro parametri in coordinazione, dilemma del prigioniero e anti-coordinazione; la discoordinazione (non simmetrica) e la morra cinese non hanno equilibri puri.

## Definizione / enunciato
Gioco a due giocatori: rappresentazione a tabella con la coppia $u_1(r,s),u_2(s,r)$ nella cella $(r,s)$; un $2\times2$ generico richiede 8 parametri. **Simmetrico** se $u_1(r,s)=u_2(r,s)=\phi(r,s)$: bastano 4 parametri,
| | $-1$ | $+1$ |
|---|---|---|
| $-1$ | $a,a$ | $d,c$ |
| $+1$ | $c,d$ | $b,b$ |

## Formule chiave
- **Coordinazione** ($a>c$, $b>d$): miglior risposta = copiare l'altro; $\mathcal N=\{(-1,-1),(+1,+1)\}$; se $a>b$, $(-1,-1)$ domina in payoff.
- **Dilemma del prigioniero** ($a>c$, $b<d$): $-1$ (tradire) è dominante; un solo equilibrio $(-1,-1)$, stretto.
- **Anti-coordinazione** ($a<c$, $b<d$): miglior risposta = fare l'opposto; $\mathcal N=\{(-1,+1),(+1,-1)\}$; esempio il gioco del pollo / falco-colomba.
- **Discoordinazione** (non simmetrico, $a>c$, $d>b$, tabella $(a,b),(c,d)/(c,d),(a,b)$): nessun equilibrio puro; esempio matching pennies con $a=d=1$, $b=c=-1$, gioco a somma zero.
- **Sasso-forbici-carta**: somma zero, nessun equilibrio puro.
Ogni $2\times2$ simmetrico è potenziale esatto con potenziale $\Phi(-,-)=a-c$, $\Phi(+,+)=b-d$, $\Phi=0$ fuori diagonale.

## Intuizione
Il segno di $a-c$ e di $b-d$ dice se conviene allinearsi all'altro su ciascuna azione: entrambi positivi = coordinazione, entrambi negativi = anti-coordinazione, discordi = un'azione dominante.

## Come si usa
Sono i "mattoni" dei giochi su rete: nei giochi separabili a coppie ogni nodo gioca lo stesso $2\times2$ con ciascun vicino (maggioranza = coordinazione, minoranza = anti-coordinazione). Per il FIP: coordinazione, dilemma e anti-coordinazione hanno grafo di miglioramento aciclico, la discoordinazione ha un ciclo.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Two-player games", "Two-player symmetric games", esempi 1-5. Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 22-28, 59, 84-87).

## Prerequisiti
- [[Equilibrio di Nash]]: miglior risposta ed equilibrio

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Gioco potenziale]]: ogni $2\times2$ simmetrico è potenziale esatto
- [[Proprietà di miglioramento finito]]: FIP nei vari casi $2\times2$
- [[Caratterizzazione dei giochi potenziali esatti]]: test sul 4-ciclo nel caso $2\times2$
- [[Gioco di maggioranza]]: coordinazione giocata su tutti i link
