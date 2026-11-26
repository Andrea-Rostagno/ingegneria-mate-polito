---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["applied vectors", "free vectors", "vettore applicato", "vettore libero", "vettori geometrici", "V3(O)", "regola del parallelogramma", "versore", "normalizzazione"]
tags: [competenza, area/algebra-geometria]
---

# Vettori applicati e vettori liberi

> Le frecce dello spazio euclideo $E_3$: il vettore applicato $\vec{OP}$ ha un punto d'applicazione, il vettore libero ne conserva solo direzione, verso e modulo.

## Definizione / enunciato
Un **vettore applicato** $\vec{OP}$ è caratterizzato da 4 dati: punto d'applicazione $O$, direzione (della retta $OP$), verso (da $O$ verso $P$), modulo $\|\vec{OP}\|$ = lunghezza di $OP$, con $\|\vec{OP}\|=0\iff O=P$. I vettori applicati in $O$ formano lo spazio tangente $V_3(O)$.

Il **vettore libero** è l'insieme degli ultimi 3 dati: due vettori applicati danno lo stesso vettore libero se e solo se uno si ottiene dall'altro per trasporto parallelo (paralleli, concordi, di pari modulo).

Operazioni in $V_3(O)$:
- **prodotto per scalare** $\lambda\vec{OP}$: stessa direzione, verso concorde se $\lambda>0$, discorde se $\lambda<0$, modulo $|\lambda|\,\|\vec{OP}\|$;
- **somma**: regola del parallelogramma (per vettori non paralleli); la differenza è $\vec u-\vec v:=\vec u+(-\vec v)$.

## Formule chiave
$$\vec u\parallel\vec v\iff \exists\lambda\in\mathbb R:\ \vec u=\lambda\vec v\ \text{oppure}\ \vec v=\lambda\vec u,\qquad \hat v=\frac{\vec v}{\|\vec v\|}\ (\vec v\neq\vec 0)$$

## Intuizione
Un vettore è uno spostamento. Gli spazi $V_3(O)$ sono tutti "uguali" (isomorfi) ma distinti: per sommare vettori applicati in punti diversi (metodo punta-coda) serve prima passare ai vettori liberi. Fissato un riferimento cartesiano ortogonale $O\vec i\vec j\vec k$, ogni vettore si identifica con la terna delle sue componenti: è il ponte verso $\mathbb R^3$.

## Come si usa
- Normalizzare: dividere un vettore non nullo per il suo modulo; i versori paralleli a $\vec{OP}\neq\vec 0$ in $V_3(O)$ sono due, $\pm\widehat{OP}$ (p. 16).
- Riconoscere il parallelismo: verificare se un vettore è multiplo dell'altro; per convenzione il vettore nullo è parallelo e complanare a ogni vettore.
- Tre vettori applicati nello stesso punto sono complanari se e solo se uno è combinazione lineare degli altri due (p. 26).

## Nei corsi
- **Algebra lineare** (triennale): primo capitolo della parte teorica (slide di S. Mercadante, a.a. 2019-20), con l'analiticizzazione tramite riferimento cartesiano. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 4-21, 25-26, 47-61); `Appunti, riassunti e formulari/VettoriGeometria1_VETTORI.pdf`.

## Prerequisiti
- Nessuno nel corso.

## Porta a
- [[Prodotto scalare]]: modulo, angolo e ortogonalità tra vettori
- [[Prodotto vettoriale]]: operazione specifica di V3(O)
- [[Spazio vettoriale]]: V3(O) e R^3 sono il prototipo di spazio vettoriale
- [[Equazioni della retta]]: retta come punto più multipli di un vettore

## Collegati
- [[Norme vettoriali]]: il modulo è la norma euclidea delle componenti
