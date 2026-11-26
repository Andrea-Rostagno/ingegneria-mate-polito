---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["state transition equation", "funzione di transizione di stato", "state transition function", "problemi decisionali sequenziali", "sequential decision problems", "variabili di stato", "state variables", "fattore esogeno", "exogenous risk factor", "belief state"]
tags: [competenza, area/ottimizzazione]
---

# Equazione di transizione di stato

> Modello a tempo discreto di un sistema controllato sotto incertezza: il nuovo stato dipende dallo stato attuale, dalla decisione e da un fattore aleatorio esogeno realizzato nel periodo successivo.

## Definizione / enunciato
Convenzione temporale: negli **istanti** $t=0,1,2,\dots$ si osserva lo stato e si decide; l'**intervallo** $t$ è il tempo fra gli istanti $t-1$ e $t$, durante il quale il sistema evolve e si realizza un disturbo aleatorio. La dinamica è
$$s_{t+1}=g_{t+1}\big(s_t,x_t,\tilde\xi_{t+1}\big),$$
dove $g_{t+1}$ è la funzione di transizione (senza indice se la dinamica non cambia nel tempo, come nei problemi a orizzonte infinito), $s_t$ lo stato (riassume tutta l'informazione utile sul passato; $s_0$ noto, $s_T$ terminale), $x_t$ la decisione o controllo (azione $a$ se l'insieme è finito; $t=0,\dots,T-1$) e $\tilde\xi_{t+1}$ il fattore esogeno.

## Formule chiave
Ordine degli eventi: $s_t$ osservato $\to$ decisione $x_t$ $\to$ realizzazione di $\tilde\xi_{t+1}$ $\to$ nuovo stato $s_{t+1}$. Tipi di variabili di stato:
- **fisiche**: risorse fisiche o finanziarie, influenzate direttamente dalle decisioni;
- **informative**: es. prezzo di un'azione in un mercato liquido o un modello di previsione del vento, non influenzate da chi decide;
- **di credenza (belief)**: parametri del modello e incertezza su di essi, rilevanti quando c'è "incertezza sull'incertezza".

## Intuizione
La decisione si prende prima di vedere il rischio del periodo successivo: per questo serve una politica che reagisca allo stato, non un piano fisso. Lo stato deve essere sufficiente a rendere il futuro indipendente dal passato, proprietà che porta ai processi decisionali di Markov.

## Come si usa
Si identificano stato, decisioni e fattori esogeni, per esempio nella gestione scorte: scorta disponibile, quantità ordinata, domanda del periodo. L'equazione serve sia per simulare una politica sia per scrivere la ricorsione della programmazione dinamica.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Discrete-time sequential decision problems under uncertainty". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 24-26).

## Porta a
- [[Politica (s,S)]]: esempio di sistema a scorte simulato
- [[Processo decisionale di Markov]]: stati, azioni e transizioni aleatorie
- [[Programmazione stocastica multistadio]]: decisioni ripetute con informazione crescente

## Collegati
- [[Catena di Markov a tempo discreto]]: dinamica senza decisioni
