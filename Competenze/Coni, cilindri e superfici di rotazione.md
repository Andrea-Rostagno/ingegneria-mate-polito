---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["cones", "cylinders", "surfaces of revolution", "cono", "cilindro", "superficie di rotazione", "direttrice", "generatrici", "vertice del cono"]
tags: [competenza, area/algebra-geometria]
---

# Coni, cilindri e superfici di rotazione

> Tre superfici costruite da una curva direttrice $C$: il cilindro (rette parallele a un vettore), il cono (rette per un vertice), la superficie di rotazione (circonferenze attorno a un asse). L'equazione cartesiana si ottiene eliminando i parametri.

## Definizione / enunciato
Sia $C:\{f(x,y,z)=0,\ g(x,y,z)=0\}$ una curva.

**Cilindro** con direttrice $C$ e generatrici parallele a $v=(a,b,c)\neq0$: si eliminano $t,x_0,y_0,z_0$ dal sistema
$$x=x_0+at,\quad y=y_0+bt,\quad z=z_0+ct,\quad f(x_0,y_0,z_0)=0,\quad g(x_0,y_0,z_0)=0 .$$

**Cono** di vertice $V$ e direttrice $C$: si eliminano $t,x_0,y_0,z_0$ da
$$x=x_V+(x_0-x_V)t,\ \ y=y_V+(y_0-y_V)t,\ \ z=z_V+(z_0-z_V)t,\ \ f(x_0,y_0,z_0)=0,\ \ g(x_0,y_0,z_0)=0 .$$

**Superficie di rotazione** di $C$ attorno alla retta $r:(x_0+at,\ y_0+bt,\ z_0+ct)$: si eliminano $\alpha,\beta,\gamma$ da
$$a(x-\alpha)+b(y-\beta)+c(z-\gamma)=0,\quad (x-x_0)^2+(y-y_0)^2+(z-z_0)^2=(\alpha-x_0)^2+(\beta-y_0)^2+(\gamma-z_0)^2,$$
$$f(\alpha,\beta,\gamma)=0,\quad g(\alpha,\beta,\gamma)=0 .$$

## Formule chiave
Criteri rapidi (Mercadante, quiz):
- un'equazione con una variabile assente rappresenta un cilindro con generatrici parallele a quell'asse;
- un'equazione omogenea (di grado 2, con vertice nell'origine) rappresenta un cono.

## Intuizione
Ogni punto della superficie sta su una "fibra" (retta o circonferenza) che incontra la direttrice. Le equazioni scrivono questa condizione, e l'eliminazione dei parametri lascia solo il vincolo sulle coordinate. Nella rotazione il punto $(\alpha,\beta,\gamma)\in C$ e il punto $(x,y,z)$ stanno sullo stesso piano ortogonale all'asse e alla stessa distanza da un punto dell'asse.

## Come si usa
- $x^2+y^2-2x+3y-1=0$ nello spazio è un **cilindro** (manca $z$), non una circonferenza: quiz in `coni.pdf` (Esercizio 14).
- $x^2+y^2-z^2=0$ è un **cono** (omogenea): `coni.pdf` (Esercizio 15) e p. 42 di `14. Analytic Geometry II v3.2.0.pdf`.
- Esercizi di costruzione (`coni.pdf`): cilindro con direttrice la circonferenza $\{x^2+y^2+z^2=25,\ z=0\}$ e generatrici parallele all'asse $z$; cono con la stessa direttrice e vertice $V(0,5,2)$; rotazione della retta $(1+t,2-t,1+t)$ attorno all'asse $z$. Il materiale riporta i testi, non le soluzioni.

## Nei corsi
- **Algebra lineare** (triennale): presenti nelle slide e negli esercizi di R. Notari (cartella "Appunti, riassunti e formulari"); nelle slide di S. Mercadante solo come casi di quadriche riconosciuti nei quiz. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/cilindro-slide.pdf` (R. Notari, §2-4); `Appunti, riassunti e formulari/coni.pdf` (esercizi); `Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 38, 41-42).

## Prerequisiti
- [[Classificazione delle quadriche]]: coni e cilindri quadrici come casi particolari
- [[Equazioni della retta]]: generatrici e asse di rotazione sono rette

## Porta a
- Nessuno.

## Collegati
- [[Circonferenza nello spazio]]: nella rotazione ogni punto descrive una circonferenza
