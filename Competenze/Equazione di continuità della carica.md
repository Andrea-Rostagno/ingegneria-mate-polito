---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["charge continuity equation", "principio di conservazione della carica", "conservation of charge", "div j + ∂ρ/∂t = 0", "bilancio di carica"]
tags: [competenza, area/fisica]
---

# Equazione di continuità della carica

> Traduzione matematica della conservazione della carica: la diminuzione della carica dentro una superficie chiusa è uguale al flusso netto di corrente uscente.

## Definizione / enunciato
**Principio di conservazione della carica** (ottenuto dall'evidenza sperimentale): in tutti i processi l'ammontare netto di carica elettrica rimane lo stesso. Presa una superficie chiusa $S$ con carica netta $q$ all'interno, all'entrata di carica corrisponde un aumento di $q$ e all'uscita una diminuzione. Il bilancio è
(diminuzione di carica in $S$) = (flusso di carica uscente) − (flusso di carica entrante) = (flusso netto di carica uscente),
con $\vec j$ presa positiva se uscente da $S$, negativa se entrante.
Usando la legge di Gauss (la carica dentro $S$ è $\varepsilon_0$ per il flusso di $\vec E$) il bilancio diventa una relazione tra $\vec j$ e la variazione di $\vec E$. Se i campi sono statici si ritrova il flusso nullo di $\vec j$ della corrente stazionaria.

## Formule chiave
$$-\frac{dq}{dt}=\oint_S\vec j\cdot\vec u_N\,ds\qquad\Longleftrightarrow\qquad \frac{dq}{dt}+\oint_S\vec j\cdot\vec u_N\,ds=0$$
$$\oint_S\vec j\cdot d\vec S+\varepsilon_0\frac{d}{dt}\left[\oint_S\vec E\cdot d\vec S\right]=0\;\Rightarrow\;\oint_S\left(\vec j+\varepsilon_0\frac{\partial\vec E}{\partial t}\right)\cdot d\vec S=0$$
$$\text{campi statici: }\oint_S\vec j\cdot d\vec S=0$$
Nelle slide compare solo la forma integrale; la forma locale indicata dall'alias non è scritta esplicitamente.

## Intuizione
È lo stesso bilancio di un fluido incomprimibile o di una massa: la carica non si crea né si distrugge, si sposta. La combinazione $\vec j+\varepsilon_0\partial\vec E/\partial t$ ha flusso sempre nullo su superfici chiuse: è il punto di partenza della corrente di spostamento.

## Come si usa
Nella carica di un condensatore, una superficie che racchiude un'armatura è attraversata dalla corrente del filo, mentre tra le armature non passa corrente ma varia $\vec E$: il bilancio mostra che la legge di Ampère va corretta (legge di Ampère-Maxwell).

## Nei corsi
- **Fisica 2** (triennale): apertura della lezione 28, prima della carica del condensatore e della legge di Ampère-Maxwell; la versione stazionaria è nella lezione 13. Fonti: `triennale/ANNO 2/fisica 2/lezioni/28.   LEZIONE.pdf` (pp. 2-4); `triennale/ANNO 2/fisica 2/lezioni/13.  LEZIONE.pdf` (p. 5).

## Prerequisiti
- [[Corrente elettrica]]: flusso di j attraverso una superficie chiusa
- [[Teorema di Gauss del flusso]]: la carica interna si scrive come flusso di ε0E

## Porta a
- [[Legge di Ampère-Maxwell]]: la contraddizione nasce dalla conservazione della carica

## Collegati
- [[Equazione di continuità]]: stesso bilancio di flusso, per la massa di un fluido
