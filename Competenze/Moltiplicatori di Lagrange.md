---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["Lagrange multipliers", "metodo dei moltiplicatori di Lagrange", "teorema dei moltiplicatori di Lagrange", "funzione lagrangiana di un problema vincolato", "ottimizzazione con vincoli di uguaglianza", "condizione di regolarità", "variazioni ammissibili al primo ordine"]
tags: [competenza, area/ottimizzazione]
---

# Moltiplicatori di Lagrange

> In un minimo locale regolare di un problema con vincoli di uguaglianza il gradiente dell'obiettivo è combinazione lineare dei gradienti dei vincoli: la lagrangiana è stazionaria rispetto a variabili e moltiplicatori.

## Definizione / enunciato
Problema $\min f(\mathbf x)$ s.t. $h_i(\mathbf x)=0$, $i=1,\dots,m$.

**Teorema.** Se $f,h_i\in C^1$, $\mathbf x^*$ ammissibile è minimo locale e i vincoli soddisfano in $\mathbf x^*$ una condizione di regolarità (gradienti $\nabla h_i(\mathbf x^*)$ linearmente indipendenti), esistono $\lambda_i^*$ tali che
$$\nabla f(\mathbf x^*)+\sum_{i=1}^m\lambda_i^*\nabla h_i(\mathbf x^*)=\mathbf 0_n .$$

## Formule chiave
$$L(\mathbf x,\boldsymbol\lambda)=f(\mathbf x)+\boldsymbol\lambda^T\mathbf h(\mathbf x),\qquad\nabla_{\mathbf x}L=\mathbf 0_n,\qquad\nabla_{\boldsymbol\lambda}L=\mathbf h(\mathbf x)=\mathbf 0_m .$$
Caso lineare $A\mathbf x=\mathbf b$ ($A$ di rango $m$, partizione $A=[B\ R]$): $\mathbf x_b=B^{-1}(\mathbf b-R\mathbf x_r)$, e la stazionarietà della funzione ridotta con $\boldsymbol\lambda=-(B^T)^{-1}\nabla_bf$ dà $\nabla f(\mathbf x^*)+A^T\boldsymbol\lambda^*=\mathbf 0_n$. Caso non lineare: la funzione implicita $\mathbf x_b=\boldsymbol\phi(\mathbf x_r)$ ha $\nabla\boldsymbol\phi(\mathbf x_r)=-\nabla_r\mathbf h\,[\nabla_b\mathbf h]^{-1}$, e si ripete il ragionamento con $B^T\leftarrow\nabla_b\mathbf h(\mathbf x^*)$, $R^T\leftarrow\nabla_r\mathbf h(\mathbf x^*)$.

## Intuizione
Due letture: (1) $\nabla f(\mathbf x^*)$ sta nel sottospazio generato dai gradienti dei vincoli; (2) $\nabla f(\mathbf x^*)$ è ortogonale alle variazioni ammissibili al primo ordine $V(\mathbf x^*)=\{\boldsymbol\delta:\nabla h_i(\mathbf x^*)^T\boldsymbol\delta=0\}$, cioè non c'è componente di discesa lungo il vincolo. La regolarità serve per il teorema della funzione implicita.

## Come si usa
Esempio delle slide: $\min x_1^2+x_2^2$ s.t. $x_1+x_2=4$: $2x_1+\lambda=0$, $2x_2+\lambda=0$, $x_1+x_2=4$ danno $x_1^*=x_2^*=2$, $\lambda^*=-4$ ($\nabla f(2,2)=(4,4)=-\lambda^*\nabla h$); nel punto $(1,3)$ il gradiente negativo $(-2,-6)=(-4,-4)+(2,-2)$ ha una componente ammissibile non nulla. Controesempio senza regolarità: $\min x_1+x_2$ s.t. $x_1^3-x_2=0$, $x_2=0$: l'ottimo è l'origine ma il sistema non ha soluzione, perché $\nabla h_1(0)=(0,-1)$ e $\nabla h_2(0)=(0,1)$ sono paralleli.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 3-8, 24-29).
- **Numerical opt** (magistrale): teorema (condizione necessaria) per $\min f$ s.t. $h(x)=0$, con $h:\mathbb R^n\to\mathbb R^m$. Se $x^*$ è minimo locale e $\{\nabla h_i(x^*)\}$ sono linearmente indipendenti, esiste un unico $\lambda^*$ con $\nabla f(x^*)+\sum_i\lambda_i^*\nabla h_i(x^*)=0$. Equivale a $\nabla\mathcal L(x^*,\lambda^*)=0$ con $\mathcal L=f+\lambda^Th$.
  - **Esempio 1:** $\min x_1^2+x_2^2$ s.t. $3x_1+x_2-3=0$ dà $x^*=(9/10,3/10)$ e $\lambda^*=-3/5$.
  - **Esempio 2:** due circonferenze tangenti in $(0,0)$. LICQ fallisce e il teorema non dà informazioni.

  Da P7 la convenzione diventa $f-\lambda^Th$. Il sistema KKT del QP è in [[Matrice KKT]], la versione aumentata in [[Metodo della lagrangiana aumentata]]. Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 10-15).
- **Ottimizzazione in condizione di incertezza** (magistrale): il materiale del corso include le stesse slide del capitolo 6 CLUT (teorema dei moltiplicatori, interpretazione geometrica ed economica, regolarità, dimostrazione); i moltiplicatori sono poi usati per il newsvendor multi-prodotto e per il caso peggiore nel portafoglio robusto. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 3-11, 24-29).

## Prerequisiti
- [[Gradiente]]: condizione sui gradienti
- [[Punti critici in più variabili]]: stazionarietà della funzione ridotta
- [[Regola della catena in più variabili]]: derivata della funzione ridotta
- [[Rango di una matrice]]: regolarità come rango massimo dei gradienti

## Porta a
- [[Prezzo ombra]]: interpretazione economica dei moltiplicatori
- [[Condizioni di Karush-Kuhn-Tucker]]: estensione ai vincoli di disuguaglianza

## Collegati
- [[Constraint qualification]]: generalizza la condizione di regolarità
- [[Funzioni di penalità e barriera]]: altro modo di trattare i vincoli
- [[Matrice jacobiana]]: i gradienti dei vincoli sono le righe della jacobiana
- Teorema della funzione implicita (non trattato nei corsi): base della dimostrazione nel caso non lineare
