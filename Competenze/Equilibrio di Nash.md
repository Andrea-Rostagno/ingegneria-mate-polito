---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Nash equilibrium", "equilibrio di Nash in strategie pure", "pure strategy Nash equilibrium", "best response", "miglior risposta", "gioco in forma strategica", "strategic form game", "strategia dominante", "dominant strategy", "dilemma del prigioniero", "prisoner's dilemma", "equilibrio di Nash stretto", "strict Nash equilibrium"]
tags: [competenza, area/network]
---

# Equilibrio di Nash

> Configurazione di azioni in cui ogni giocatore sta già giocando una miglior risposta alle azioni degli altri: nessuno ha un incentivo stretto a deviare da solo.

## Definizione / enunciato
**Gioco in forma strategica** $(\mathcal V,\{\mathcal A_i\},\{u_i\})$: giocatori $\mathcal V$, azioni $\mathcal A_i$, configurazioni $\mathcal X=\prod_i\mathcal A_i$, utilità $u_i(x)=u_i(x_i,x_{-i})$.
**Miglior risposta:** $\mathcal B_i(x_{-i})=\arg\max_{x_i\in\mathcal A_i}u_i(x_i,x_{-i})$.
**Equilibrio di Nash (puro):** $x^*\in\mathcal X$ con
$$x^*_i\in\mathcal B_i(x^*_{-i})\qquad\forall i\in\mathcal V .$$
$\mathcal N$ è l'insieme degli equilibri; $x^*$ è **stretto** se $|\mathcal B_i(x^*_{-i})|=1$ per ogni $i$. Un'azione è **dominante** se è miglior risposta qualunque cosa facciano gli altri.

## Formule chiave
**Dilemma del prigioniero** (utilità = $-$anni di carcere):
| | Confessa | Silenzio |
|---|---|---|
| Confessa | $-3,-3$ | $0,-5$ |
| Silenzio | $-5,0$ | $-1,-1$ |
Confessare è dominante per entrambi; unico equilibrio (Confessa, Confessa), anche se $(-1,-1)$ sarebbe meglio per tutti. Con il pareggio modificato $(-2,-5)$/$(-5,-2)$ non ci sono strategie dominanti e gli equilibri diventano 2. **Gioco del pollo**: Sterza/Dritto con $(0,0)$, $(-1,1)$, $(1,-1)$, $(-100,-100)$, due equilibri asimmetrici.

## Intuizione
Nash è una condizione di stabilità rispetto a deviazioni unilaterali, non di ottimalità collettiva: il dilemma del prigioniero mostra che l'equilibrio può essere inefficiente. Le ipotesi chiave: gioco giocato una volta, niente comunicazione, ogni giocatore guarda solo la propria utilità.

## Come si usa
Per trovare gli equilibri puri di un gioco finito si calcolano le miglior risposte e si cercano le configurazioni in cui si incrociano (nelle tabelle: celle in cui entrambi i payoff sono massimi nella propria riga/colonna). Nei giochi continui si risolve il sistema $x_i=\mathcal B_i(x_{-i})$, come per Cournot.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "The Prisoner Dilemma", "The Game of Chicken", "Basic definitions", "Best response and Nash equilibrium"; cenni storici (von Neumann-Morgenstern 1944, Nash 1950, Nobel 1994). Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 3-21).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Giochi 2x2 simmetrici]]: classificazione dei giochi a due azioni
- [[Teorema di esistenza di Nash]]: esistenza in strategie miste
- [[Gioco potenziale]]: esistenza di equilibri puri
- [[Gioco grafico]]: giochi in cui l'utilità dipende dai vicini
- [[Competizione di Cournot]]: equilibrio in un gioco continuo
- [[Competizione di Bertrand]]: equilibrio con utilità discontinue

## Collegati
- [[Equilibrio di Wardrop]]: analogo per un continuo di giocatori
- [[Prezzo dell'anarchia]]: inefficienza degli equilibri
