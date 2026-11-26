---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["cost structure", "costo fisso", "costo affondato", "sunk cost", "costo marginale", "ricavo marginale", "costo medio", "economia di scala", "diseconomia di scala"]
tags: [competenza, area/ottimizzazione]
---

# Struttura dei costi

> Classificazione delle funzioni di costo $C(x)$ di un'attività (fisso affondato, fisso, variabile, economie e diseconomie di scala, semivariabile) e condizione "ricavo marginale = costo marginale" per l'ottimo del profitto.

## Definizione / enunciato
Tipi di costo in funzione del livello $x$ dell'attività:
- (a) **costo fisso affondato** (sunk): si paga comunque;
- (b) **costo fisso / tariffa fissa**: nullo se $x=0$;
- (c) **costo variabile lineare** (proporzionale);
- (d) **economia di scala**: costo concavo in $x$;
- (e) **diseconomia di scala**: costo convesso in $x$;
- (f) **costi semivariabili**: costanti a tratti.

Misure collegate: **costo medio** $\bar C(x)=C(x)/x$ e **costo marginale** $C'(x)$.

## Formule chiave
Con funzione di domanda inversa $p(q)$, ricavo $r(q)=p(q)\,q$ e profitto $\pi(q)=r(q)-c(q)$ concavo:
$$\pi'(q^*)=r'(q^*)-c'(q^*)=0\ \Rightarrow\ r'(q^*)=c'(q^*).$$

## Intuizione
Se il ricavo marginale supera il costo marginale conviene produrre di più, altrimenti di meno: all'ottimo si uguagliano. La natura di un costo dipende dal livello decisionale: nel mix di produzione (tattico) la capacità è un costo affondato; nella pianificazione della capacità (strategico) diventa una decisione. Salendo di livello tutti i costi diventano variabili o semivariabili.

## Come si usa
Riconoscere la struttura serve a scegliere la formulazione: i costi affondati si omettono dall'obiettivo, i costi fissi richiedono binarie con grande M, le economie di scala danno funzioni concave che, se lineari a tratti, richiedono binarie; le diseconomie (convesse) si linearizzano senza binarie.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 19-21).

## Prerequisiti
- [[Derivata]]: costo e ricavo marginale
- [[Funzione convessa]]: economie di scala concave, diseconomie convesse

## Porta a
- [[Vincoli con grande M]]: modellare il costo fisso
- [[Funzioni lineari a tratti]]: costi concavi o convessi linearizzati

## Collegati
- [[Programmazione quadratica]]: prezzo ottimo con domanda lineare
- [[Modello EOQ]]: costo fisso di ordinazione più costo variabile
- [[Teorema di Fermat]]: condizione $\pi'(q^*)=0$ all'ottimo interno
